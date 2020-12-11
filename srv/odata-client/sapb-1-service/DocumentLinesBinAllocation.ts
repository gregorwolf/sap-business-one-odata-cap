/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * DocumentLinesBinAllocation
 */
export interface DocumentLinesBinAllocation {
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
   * Base Line Number.
   * @nullable
   */
  baseLineNumber?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[DocumentLinesBinAllocation.build]] instead.
 */
export function createDocumentLinesBinAllocation(json: any): DocumentLinesBinAllocation {
  return DocumentLinesBinAllocation.build(json);
}

/**
 * DocumentLinesBinAllocationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class DocumentLinesBinAllocationField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DocumentLinesBinAllocation> {
  /**
   * Representation of the [[DocumentLinesBinAllocation.binAbsEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  binAbsEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BinAbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLinesBinAllocation.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[DocumentLinesBinAllocation.allowNegativeQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  allowNegativeQuantity: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AllowNegativeQuantity', this);
  /**
   * Representation of the [[DocumentLinesBinAllocation.serialAndBatchNumbersBaseLine]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serialAndBatchNumbersBaseLine: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SerialAndBatchNumbersBaseLine', this, 'Edm.Int32');
  /**
   * Representation of the [[DocumentLinesBinAllocation.baseLineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  baseLineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('BaseLineNumber', this, 'Edm.Int32');

  /**
   * Creates an instance of DocumentLinesBinAllocationField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, DocumentLinesBinAllocation);
  }
}

export namespace DocumentLinesBinAllocation {
  /**
   * Metadata information on all properties of the `DocumentLinesBinAllocation` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DocumentLinesBinAllocation>[] = [{
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
    originalName: 'BaseLineNumber',
    name: 'baseLineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): DocumentLinesBinAllocation {
    return deserializeComplexTypeV4(json, DocumentLinesBinAllocation);
  }
}
