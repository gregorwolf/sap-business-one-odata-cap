/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
  /**
   * Is Debit.
   * @nullable
   */
  isDebit?: BoYesNoEnum;
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
export class MultiplePaymentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, MultiplePayment> {
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
  /**
   * Representation of the [[MultiplePayment.isDebit]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isDebit: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('IsDebit', this);

  /**
   * Creates an instance of MultiplePaymentField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, MultiplePayment);
  }
}

export namespace MultiplePayment {
  /**
   * Metadata information on all properties of the `MultiplePayment` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<MultiplePayment>[] = [{
    originalName: 'BankStatmentLineID',
    name: 'bankStatmentLineId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ListLineID',
    name: 'listLineId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocumentIdentifier',
    name: 'documentIdentifier',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AmountLC',
    name: 'amountLc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AmountFC',
    name: 'amountFc',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'IsDebit',
    name: 'isDebit',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): MultiplePayment {
    return deserializeComplexTypeV4(json, MultiplePayment);
  }
}
