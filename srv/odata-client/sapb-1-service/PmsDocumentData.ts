/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { PmDocumentTypeEnum } from './PmDocumentTypeEnum';
import { LineStatusTypeEnum } from './LineStatusTypeEnum';
import { AmountCatTypeEnum } from './AmountCatTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PmsDocumentData
 */
export interface PmsDocumentData {
  /**
   * Line Id.
   * @nullable
   */
  lineId?: number;
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: number;
  /**
   * Doc Type.
   * @nullable
   */
  docType?: PmDocumentTypeEnum;
  /**
   * Doc Entry.
   * @nullable
   */
  docEntry?: number;
  /**
   * Doc Date.
   * @nullable
   */
  docDate?: Moment;
  /**
   * Total.
   * @nullable
   */
  total?: number;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: number;
  /**
   * Status.
   * @nullable
   */
  status?: LineStatusTypeEnum;
  /**
   * Amount Category.
   * @nullable
   */
  amountCategory?: AmountCatTypeEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[PmsDocumentData.build]] instead.
 */
export function createPmsDocumentData(json: any): PmsDocumentData {
  return PmsDocumentData.build(json);
}

/**
 * PmsDocumentDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmsDocumentDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmsDocumentData> {
  /**
   * Representation of the [[PmsDocumentData.lineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsDocumentData.stageId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsDocumentData.docType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DocType', this);
  /**
   * Representation of the [[PmsDocumentData.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsDocumentData.docDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DocDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PmsDocumentData.total]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  total: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Total', this, 'Edm.Double');
  /**
   * Representation of the [[PmsDocumentData.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[PmsDocumentData.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Status', this);
  /**
   * Representation of the [[PmsDocumentData.amountCategory]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountCategory: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AmountCategory', this);

  /**
   * Creates an instance of PmsDocumentDataField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PmsDocumentData);
  }
}

export namespace PmsDocumentData {
  /**
   * Metadata information on all properties of the `PmsDocumentData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmsDocumentData>[] = [{
    originalName: 'LineID',
    name: 'lineId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StageID',
    name: 'stageId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocType',
    name: 'docType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DocEntry',
    name: 'docEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocDate',
    name: 'docDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Total',
    name: 'total',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'LineNumber',
    name: 'lineNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Status',
    name: 'status',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'AmountCategory',
    name: 'amountCategory',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PmsDocumentData {
    return deserializeComplexTypeV4(json, PmsDocumentData);
  }
}
