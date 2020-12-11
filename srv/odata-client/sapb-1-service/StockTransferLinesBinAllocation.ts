/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { BinActionTypeEnum } from './BinActionTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * StockTransferLinesBinAllocation
 */
export interface StockTransferLinesBinAllocation {
  /**
   * Bin Abs Entry.
   * @nullable
   */
  binAbsEntry?: number;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: number;
  /**
   * Allow Negative Quantity.
   * @nullable
   */
  allowNegativeQuantity?: BoYesNoEnum;
  /**
   * Serial And Batch Numbers Base Line.
   * @nullable
   */
  serialAndBatchNumbersBaseLine?: number;
  /**
   * Bin Action Type.
   * @nullable
   */
  binActionType?: BinActionTypeEnum;
  /**
   * Base Line Number.
   * @nullable
   */
  baseLineNumber?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[StockTransferLinesBinAllocation.build]] instead.
 */
export function createStockTransferLinesBinAllocation(json: any): StockTransferLinesBinAllocation {
  return StockTransferLinesBinAllocation.build(json);
}

/**
 * StockTransferLinesBinAllocationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class StockTransferLinesBinAllocationField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, StockTransferLinesBinAllocation> {
  /**
   * Representation of the [[StockTransferLinesBinAllocation.binAbsEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  binAbsEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BinAbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[StockTransferLinesBinAllocation.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[StockTransferLinesBinAllocation.allowNegativeQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allowNegativeQuantity: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AllowNegativeQuantity', this);
  /**
   * Representation of the [[StockTransferLinesBinAllocation.serialAndBatchNumbersBaseLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialAndBatchNumbersBaseLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SerialAndBatchNumbersBaseLine', this, 'Edm.Int32');
  /**
   * Representation of the [[StockTransferLinesBinAllocation.binActionType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  binActionType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('BinActionType', this);
  /**
   * Representation of the [[StockTransferLinesBinAllocation.baseLineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseLineNumber', this, 'Edm.Int32');

  /**
   * Creates an instance of StockTransferLinesBinAllocationField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, StockTransferLinesBinAllocation);
  }
}

export namespace StockTransferLinesBinAllocation {
  /**
   * Metadata information on all properties of the `StockTransferLinesBinAllocation` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<StockTransferLinesBinAllocation>[] = [{
    originalName: 'BinAbsEntry',
    name: 'binAbsEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Quantity',
    name: 'quantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'AllowNegativeQuantity',
    name: 'allowNegativeQuantity',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SerialAndBatchNumbersBaseLine',
    name: 'serialAndBatchNumbersBaseLine',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'BinActionType',
    name: 'binActionType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'BaseLineNumber',
    name: 'baseLineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): StockTransferLinesBinAllocation {
    return deserializeComplexTypeV4(json, StockTransferLinesBinAllocation);
  }
}
