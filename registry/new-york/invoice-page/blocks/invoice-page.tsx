"use client"

import * as React from "react"
import { cn } from "@/registry/new-york/adminlte-theme/lib/cn"

interface InvoiceItem {
  id: string
  quantity: number
  description: string
  serialNumber?: string
  unitPrice: number
}

interface InvoicePageProps extends React.HTMLAttributes<HTMLDivElement> {
  invoiceNumber: string
  date: string
  dueDate?: string
  from: {
    name: string
    address: string
    phone?: string
    email?: string
  }
  to: {
    name: string
    address: string
    phone?: string
    email?: string
  }
  items: InvoiceItem[]
  paymentMethod?: string
  taxRate?: number
  shippingCost?: number
  onPrint?: () => void
}

function InvoicePage({
  className,
  invoiceNumber,
  date,
  dueDate,
  from,
  to,
  items,
  paymentMethod = "Credit Card",
  taxRate = 0,
  shippingCost = 0,
  onPrint,
  ...props
}: InvoicePageProps) {
  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
  const tax = subtotal * (taxRate / 100)
  const total = subtotal + tax + shippingCost

  return (
    <div
      className={cn("bg-white shadow-[0_1px_1px_rgba(0,0,0,0.1)] rounded-[3px]", className)}
      {...props}
    >
      {/* Header */}
      <section className="p-[20px]">
        <div className="flex justify-between items-start mb-[20px]">
          <div>
            <h2 className="text-[20px] m-0 mb-[5px]">{from.name}</h2>
            <div className="text-[14px] text-[#666]">
              {from.address && <div>{from.address}</div>}
              {from.phone && <div>Phone: {from.phone}</div>}
              {from.email && <div>Email: {from.email}</div>}
            </div>
          </div>
          <div className="text-right">
            <h4 className="text-[14px] text-[#666] m-0">
              Invoice #{invoiceNumber}
            </h4>
            <div className="text-[14px] text-[#666]">
              <div>Date: {date}</div>
              {dueDate && <div>Due: {dueDate}</div>}
              <div>Payment: {paymentMethod}</div>
            </div>
          </div>
        </div>

        {/* To */}
        <div className="mb-[20px]">
          <h4 className="text-[14px] text-[#666] mb-[5px]">To:</h4>
          <div className="text-[14px]">
            <strong>{to.name}</strong>
            {to.address && <div>{to.address}</div>}
            {to.phone && <div>Phone: {to.phone}</div>}
            {to.email && <div>Email: {to.email}</div>}
          </div>
        </div>
      </section>

      {/* Items */}
      <div className="px-[20px]">
        <table className="w-full border-collapse mb-[20px]">
          <thead>
            <tr className="bg-[#f4f4f4]">
              <th className="text-left p-[8px] text-[14px] font-semibold border-b-[2px] border-b-[#f4f4f4]">Qty</th>
              <th className="text-left p-[8px] text-[14px] font-semibold border-b-[2px] border-b-[#f4f4f4]">Product</th>
              <th className="text-left p-[8px] text-[14px] font-semibold border-b-[2px] border-b-[#f4f4f4]">Serial #</th>
              <th className="text-right p-[8px] text-[14px] font-semibold border-b-[2px] border-b-[#f4f4f4]">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="p-[8px] text-[14px] border-t border-t-[#f4f4f4]">{item.quantity}</td>
                <td className="p-[8px] text-[14px] border-t border-t-[#f4f4f4]">{item.description}</td>
                <td className="p-[8px] text-[14px] border-t border-t-[#f4f4f4]">{item.serialNumber || "-"}</td>
                <td className="p-[8px] text-[14px] border-t border-t-[#f4f4f4] text-right">
                  ${(item.quantity * item.unitPrice).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="px-[20px] pb-[20px]">
        <div className="flex justify-end">
          <div className="w-[250px]">
            <div className="flex justify-between py-[5px] text-[14px]">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {taxRate > 0 && (
              <div className="flex justify-between py-[5px] text-[14px]">
                <span>Tax ({taxRate}%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            )}
            {shippingCost > 0 && (
              <div className="flex justify-between py-[5px] text-[14px]">
                <span>Shipping:</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between py-[5px] text-[16px] font-bold border-t border-t-[#f4f4f4] mt-[5px] pt-[10px]">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-[20px] bg-[#f4f4f4] rounded-b-[3px] flex justify-end gap-[5px]">
        <button
          type="button"
          className="px-[12px] py-[6px] bg-[#f4f4f4] border border-[#ddd] text-[#444] rounded-[3px] text-[14px] cursor-pointer hover:bg-[#e7e7e7]"
          onClick={() => window.print()}
        >
          &#128424; Print
        </button>
        <button
          type="button"
          className="px-[12px] py-[6px] bg-[#00a65a] border border-[#008d4c] text-white rounded-[3px] text-[14px] cursor-pointer hover:bg-[#008d4c]"
        >
          Submit Payment
        </button>
      </div>
    </div>
  )
}

export { InvoicePage }
export type { InvoicePageProps, InvoiceItem }
