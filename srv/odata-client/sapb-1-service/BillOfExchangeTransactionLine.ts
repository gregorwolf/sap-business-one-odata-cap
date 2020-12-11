/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoBoeTypes } from './BoBoeTypes';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BillOfExchangeTransactionLine
 */
export interface BillOfExchangeTransactionLine {
  /**
   * Bill Of Exchange No.
   * @nullable
   */
  billOfExchangeNo?: number;
  /**
   * Bill Of Exchange Type.
   * @nullable
   */
  billOfExchangeType?: BoBoeTypes;
  /**
   * Bill Of Exchange Due Date.
   * @nullable
   */
  billOfExchangeDueDate?: Moment;
}

/**
 * @deprecated Since v1.6.0. Use [[BillOfExchangeTransactionLine.build]] instead.
 */
export function createBillOfExchangeTransactionLine(json: any): BillOfExchangeTransactionLine {
  return BillOfExchangeTransactionLine.build(json);
}

/**
 * BillOfExchangeTransactionLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BillOfExchangeTransactionLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BillOfExchangeTransactionLine> {
  /**
   * Representation of the [[BillOfExchangeTransactionLine.billOfExchangeNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfExchangeNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BillOfExchangeNo', this, 'Edm.Int32');
  /**
   * Representation of the [[BillOfExchangeTransactionLine.billOfExchangeType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfExchangeType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('BillOfExchangeType', this);
  /**
   * Representation of the [[BillOfExchangeTransactionLine.billOfExchangeDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  billOfExchangeDueDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('BillOfExchangeDueDate', this, 'Edm.DateTimeOffset');

  /**
   * Creates an instance of BillOfExchangeTransactionLineField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BillOfExchangeTransactionLine);
  }
}

export namespace BillOfExchangeTransactionLine {
  /**
   * Metadata information on all properties of the `BillOfExchangeTransactionLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BillOfExchangeTransactionLine>[] = [{
    originalName: 'BillOfExchangeNo',
    name: 'billOfExchangeNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BillOfExchangeType',
    name: 'billOfExchangeType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'BillOfExchangeDueDate',
    name: 'billOfExchangeDueDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BillOfExchangeTransactionLine {
    return deserializeComplexTypeV4(json, BillOfExchangeTransactionLine);
  }
}
