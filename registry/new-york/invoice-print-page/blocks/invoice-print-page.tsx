"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface InvoicePrintItem {
  id: string
  quantity: number
  description: string
  serialNumber?: string
  unitPrice: number
}

interface InvoicePrintPageProps extends React.HTMLAttributes<HTMLDivElement> {
  invoiceNumber: string
  date: string
  from: { name: string; address: string; phone?: string; email?: string }
  to: { name: string; address: string; phone?: string; email?: string }
  items: InvoicePrintItem[]
  taxRate?: number
  shippingCost?: number
}

function InvoicePrintPage({
  className,
  invoiceNumber,
  date,
  from,
  to,
  items,
  taxRate = 0,
  shippingCost = 0,
  ...props
}: InvoicePrintPageProps) {
  const subtotal = items.reduce((s, i) => s + i.quantity * i.unitPrice, 0)
  const tax = subtotal * (taxRate / 100)
  const total = subtotal + tax + shippingCost

  return (
    <div
      className={cn("bg-white p-[30px] text-[#333] max-w-[800px] mx-auto print:shadow-none", className)}
      {...props}
    >
      <div className="flex justify-between mb-[30px]">
        <div>
          <h2 className="text-[24px] font-bold m-0">{from.name}</h2>
          <div className="text-[13px] text-[#666] mt-[5px]">
            {from.address && <div>{from.address}</div>}
            {from.phone && <div>Phone: {from.phone}</div>}
            {from.email && <div>Email: {from.email}</div>}
          </div>
        </div>
        <div className="text-right text-[13px] text-[#666]">
          <div>Invoice #{invoiceNumber}</div>
          <div>{date}</div>
        </div>
      </div>

      <div className="mb-[20px] text-[13px]">
        <strong>To:</strong> {to.name}
        {to.address && <span>, {to.address}</span>}
      </div>

      <table className="w-full border-collapse mb-[20px] text-[13px]">
        <thead>
          <tr className="border-b-[2px] border-b-[#333]">
            <th className="text-left p-[6px]">Qty</th>
            <th className="text-left p-[6px]">Description</th>
            <th className="text-left p-[6px]">Serial #</th>
            <th className="text-right p-[6px]">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-b-[#ddd]">
              <td className="p-[6px]">{item.quantity}</td>
              <td className="p-[6px]">{item.description}</td>
              <td className="p-[6px]">{item.serialNumber || "-"}</td>
              <td className="p-[6px] text-right">${(item.quantity * item.unitPrice).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end text-[13px]">
        <div className="w-[200px]">
          <div className="flex justify-between py-[3px]">
            <span>Subtotal:</span><span>${subtotal.toFixed(2)}</span>
          </div>
          {taxRate > 0 && (
            <div className="flex justify-between py-[3px]">
              <span>Tax ({taxRate}%):</span><span>${tax.toFixed(2)}</span>
            </div>
          )}
          {shippingCost > 0 && (
            <div className="flex justify-between py-[3px]">
              <span>Shipping:</span><span>${shippingCost.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between py-[3px] font-bold border-t border-t-[#333] mt-[3px] pt-[6px]">
            <span>Total:</span><span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { InvoicePrintPage }
export type { InvoicePrintPageProps }
