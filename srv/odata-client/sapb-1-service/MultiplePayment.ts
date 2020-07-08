/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * MultiplePayment
 */
export interface MultiplePayment {
  /**
   * Bank Statment Line Id.
   * @nullable
   */
  bankStatmentLineId?: number;
  /**
   * List Line Id.
   * @nullable
   */
  listLineId?: number;
  /**
   * Document Identifier.
   * @nullable
   */
  documentIdentifier?: string;
  /**
   * Amount Lc.
   * @nullable
   */
  amountLc?: number;
  /**
   * Amount Fc.
   * @nullable
   */
  amountFc?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[MultiplePayment.build]] instead.
 */
export function createMultiplePayment(json: any): MultiplePayment {
  return MultiplePayment.build(json);
}

/**
 * MultiplePaymentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class MultiplePaymentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[MultiplePayment.bankStatmentLineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bankStatmentLineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BankStatmentLineID', this, 'Edm.Int32');
  /**
   * Representation of the [[MultiplePayment.listLineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  listLineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ListLineID', this, 'Edm.Int32');
  /**
   * Representation of the [[MultiplePayment.documentIdentifier]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentIdentifier: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('DocumentIdentifier', this, 'Edm.String');
  /**
   * Representation of the [[MultiplePayment.amountLc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountLc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AmountLC', this, 'Edm.Double');
  /**
   * Representation of the [[MultiplePayment.amountFc]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountFc: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AmountFC', this, 'Edm.Double');
}

export namespace MultiplePayment {
  export function build(json: { [keys: string]: FieldType }): MultiplePayment {
    return createComplexType(json, {
      BankStatmentLineID: (bankStatmentLineId: number) => ({ bankStatmentLineId: edmToTs(bankStatmentLineId, 'Edm.Int32') }),
      ListLineID: (listLineId: number) => ({ listLineId: edmToTs(listLineId, 'Edm.Int32') }),
      DocumentIdentifier: (documentIdentifier: string) => ({ documentIdentifier: edmToTs(documentIdentifier, 'Edm.String') }),
      AmountLC: (amountLc: number) => ({ amountLc: edmToTs(amountLc, 'Edm.Double') }),
      AmountFC: (amountFc: number) => ({ amountFc: edmToTs(amountFc, 'Edm.Double') })
    });
  }
}
