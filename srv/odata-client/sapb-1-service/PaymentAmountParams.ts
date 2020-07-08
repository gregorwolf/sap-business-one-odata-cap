/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * PaymentAmountParams
 */
export interface PaymentAmountParams {
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Installment Id.
   * @nullable
   */
  installmentId?: number;
  /**
   * Cash Discount Percentage.
   * @nullable
   */
  cashDiscountPercentage?: number;
  /**
   * Cash Discount Amount.
   * @nullable
   */
  cashDiscountAmount?: number;
  /**
   * Cash Discount Amount Fc.
   * @nullable
   */
  cashDiscountAmountFc?: number;
  /**
   * Cash Discount Amount Sc.
   * @nullable
   */
  cashDiscountAmountSc?: number;
  /**
   * Total Payment Amount.
   * @nullable
   */
  totalPaymentAmount?: number;
  /**
   * Total Payment Amount Fc.
   * @nullable
   */
  totalPaymentAmountFc?: number;
  /**
   * Total Payment Amount Sc.
   * @nullable
   */
  totalPaymentAmountSc?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PaymentAmountParams.build]] instead.
 */
export function createPaymentAmountParams(json: any): PaymentAmountParams {
  return PaymentAmountParams.build(json);
}

/**
 * PaymentAmountParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentAmountParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[PaymentAmountParams.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentAmountParams.installmentId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  installmentId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InstallmentId', this, 'Edm.Int32');
  /**
   * Representation of the [[PaymentAmountParams.cashDiscountPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashDiscountPercentage: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CashDiscountPercentage', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentAmountParams.cashDiscountAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashDiscountAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CashDiscountAmount', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentAmountParams.cashDiscountAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashDiscountAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CashDiscountAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentAmountParams.cashDiscountAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cashDiscountAmountSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CashDiscountAmountSC', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentAmountParams.totalPaymentAmount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalPaymentAmount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalPaymentAmount', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentAmountParams.totalPaymentAmountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalPaymentAmountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalPaymentAmountFC', this, 'Edm.Double');
  /**
   * Representation of the [[PaymentAmountParams.totalPaymentAmountSc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  totalPaymentAmountSc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('TotalPaymentAmountSC', this, 'Edm.Double');
}

export namespace PaymentAmountParams {
  export function build(json: { [keys: string]: FieldType }): PaymentAmountParams {
    return createComplexType(json, {
      DocEntry: (docEntry: number) => ({ docEntry: edmToTs(docEntry, 'Edm.Int32') }),
      InstallmentId: (installmentId: number) => ({ installmentId: edmToTs(installmentId, 'Edm.Int32') }),
      CashDiscountPercentage: (cashDiscountPercentage: number) => ({ cashDiscountPercentage: edmToTs(cashDiscountPercentage, 'Edm.Double') }),
      CashDiscountAmount: (cashDiscountAmount: number) => ({ cashDiscountAmount: edmToTs(cashDiscountAmount, 'Edm.Double') }),
      CashDiscountAmountFC: (cashDiscountAmountFc: number) => ({ cashDiscountAmountFc: edmToTs(cashDiscountAmountFc, 'Edm.Double') }),
      CashDiscountAmountSC: (cashDiscountAmountSc: number) => ({ cashDiscountAmountSc: edmToTs(cashDiscountAmountSc, 'Edm.Double') }),
      TotalPaymentAmount: (totalPaymentAmount: number) => ({ totalPaymentAmount: edmToTs(totalPaymentAmount, 'Edm.Double') }),
      TotalPaymentAmountFC: (totalPaymentAmountFc: number) => ({ totalPaymentAmountFc: edmToTs(totalPaymentAmountFc, 'Edm.Double') }),
      TotalPaymentAmountSC: (totalPaymentAmountSc: number) => ({ totalPaymentAmountSc: edmToTs(totalPaymentAmountSc, 'Edm.Double') })
    });
  }
}
