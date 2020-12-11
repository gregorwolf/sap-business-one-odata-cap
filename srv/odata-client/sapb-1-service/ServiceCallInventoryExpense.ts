/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoSvcExpPartTypes } from './BoSvcExpPartTypes';
import { BoSvcEpxDocTypes } from './BoSvcEpxDocTypes';
import { BoStckTrnDir } from './BoStckTrnDir';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ServiceCallInventoryExpense
 */
export interface ServiceCallInventoryExpense {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
  /**
   * Part Type.
   * @nullable
   */
  partType?: BoSvcExpPartTypes;
  /**
   * Document Type.
   * @nullable
   */
  documentType?: BoSvcEpxDocTypes;
  /**
   * Document Posting Date.
   * @nullable
   */
  documentPostingDate?: Moment;
  /**
   * Document Number.
   * @nullable
   */
  documentNumber?: number;
  /**
   * Stock Transfer Direction.
   * @nullable
   */
  stockTransferDirection?: BoStckTrnDir;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ServiceCallInventoryExpense.build]] instead.
 */
export function createServiceCallInventoryExpense(json: any): ServiceCallInventoryExpense {
  return ServiceCallInventoryExpense.build(json);
}

/**
 * ServiceCallInventoryExpenseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ServiceCallInventoryExpenseField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ServiceCallInventoryExpense> {
  /**
   * Representation of the [[ServiceCallInventoryExpense.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceCallInventoryExpense.partType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  partType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('PartType', this);
  /**
   * Representation of the [[ServiceCallInventoryExpense.documentType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DocumentType', this);
  /**
   * Representation of the [[ServiceCallInventoryExpense.documentPostingDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentPostingDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DocumentPostingDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ServiceCallInventoryExpense.documentNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[ServiceCallInventoryExpense.stockTransferDirection]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stockTransferDirection: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('StockTransferDirection', this);
  /**
   * Representation of the [[ServiceCallInventoryExpense.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');

  /**
   * Creates an instance of ServiceCallInventoryExpenseField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ServiceCallInventoryExpense);
  }
}

export namespace ServiceCallInventoryExpense {
  /**
   * Metadata information on all properties of the `ServiceCallInventoryExpense` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ServiceCallInventoryExpense>[] = [{
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'PartType',
    name: 'partType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DocumentType',
    name: 'documentType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DocumentPostingDate',
    name: 'documentPostingDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'DocumentNumber',
    name: 'documentNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StockTransferDirection',
    name: 'stockTransferDirection',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ServiceCallInventoryExpense {
    return deserializeComplexTypeV4(json, ServiceCallInventoryExpense);
  }
}
