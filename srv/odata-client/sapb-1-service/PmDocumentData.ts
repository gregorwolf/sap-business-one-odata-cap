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
 * PmDocumentData
 */
export interface PmDocumentData {
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
 * @deprecated Since v1.6.0. Use [[PmDocumentData.build]] instead.
 */
export function createPmDocumentData(json: any): PmDocumentData {
  return PmDocumentData.build(json);
}

/**
 * PmDocumentDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmDocumentDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmDocumentData> {
  /**
   * Representation of the [[PmDocumentData.lineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmDocumentData.stageId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmDocumentData.docType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DocType', this);
  /**
   * Representation of the [[PmDocumentData.docEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[PmDocumentData.docDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DocDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PmDocumentData.total]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  total: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Total', this, 'Edm.Double');
  /**
   * Representation of the [[PmDocumentData.lineNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[PmDocumentData.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Status', this);
  /**
   * Representation of the [[PmDocumentData.amountCategory]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  amountCategory: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AmountCategory', this);

  /**
   * Creates an instance of PmDocumentDataField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PmDocumentData);
  }
}

export namespace PmDocumentData {
  /**
   * Metadata information on all properties of the `PmDocumentData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmDocumentData>[] = [{
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
  export function build(json: { [keys: string]: FieldType }): PmDocumentData {
    return deserializeComplexTypeV4(json, PmDocumentData);
  }
}
