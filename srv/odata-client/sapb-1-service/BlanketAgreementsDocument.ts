/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BlanketAgreementDocTypeEnum } from './BlanketAgreementDocTypeEnum';
import { BoStatus } from './BoStatus';
import { BaDocumentStatus } from './BaDocumentStatus';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BlanketAgreementsDocument
 */
export interface BlanketAgreementsDocument {
  /**
   * Agreement Row Number.
   * @nullable
   */
  agreementRowNumber?: number;
  /**
   * Document Type.
   * @nullable
   */
  documentType?: BlanketAgreementDocTypeEnum;
  /**
   * Document No.
   * @nullable
   */
  documentNo?: number;
  /**
   * Document Row Number.
   * @nullable
   */
  documentRowNumber?: number;
  /**
   * Document Date.
   * @nullable
   */
  documentDate?: Moment;
  /**
   * Item No.
   * @nullable
   */
  itemNo?: string;
  /**
   * Item Description.
   * @nullable
   */
  itemDescription?: string;
  /**
   * Unit Price.
   * @nullable
   */
  unitPrice?: number;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: number;
  /**
   * Discount.
   * @nullable
   */
  discount?: number;
  /**
   * Uo M.
   * @nullable
   */
  uoM?: string;
  /**
   * Row Status.
   * @nullable
   */
  rowStatus?: BoStatus;
  /**
   * Uo M Code.
   * @nullable
   */
  uoMCode?: string;
  /**
   * Units Of Measurement.
   * @nullable
   */
  unitsOfMeasurement?: number;
  /**
   * Doc Status.
   * @nullable
   */
  docStatus?: BaDocumentStatus;
}

/**
 * @deprecated Since v1.6.0. Use [[BlanketAgreementsDocument.build]] instead.
 */
export function createBlanketAgreementsDocument(json: any): BlanketAgreementsDocument {
  return BlanketAgreementsDocument.build(json);
}

/**
 * BlanketAgreementsDocumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BlanketAgreementsDocumentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BlanketAgreementsDocument> {
  /**
   * Representation of the [[BlanketAgreementsDocument.agreementRowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  agreementRowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AgreementRowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[BlanketAgreementsDocument.documentType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DocumentType', this);
  /**
   * Representation of the [[BlanketAgreementsDocument.documentNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentNo', this, 'Edm.Int32');
  /**
   * Representation of the [[BlanketAgreementsDocument.documentRowNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentRowNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('DocumentRowNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[BlanketAgreementsDocument.documentDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('DocumentDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[BlanketAgreementsDocument.itemNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemNo', this, 'Edm.String');
  /**
   * Representation of the [[BlanketAgreementsDocument.itemDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemDescription', this, 'Edm.String');
  /**
   * Representation of the [[BlanketAgreementsDocument.unitPrice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitPrice: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UnitPrice', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsDocument.quantity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  quantity: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Quantity', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsDocument.discount]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  discount: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Discount', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsDocument.uoM]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoM: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UoM', this, 'Edm.String');
  /**
   * Representation of the [[BlanketAgreementsDocument.rowStatus]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowStatus: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('RowStatus', this);
  /**
   * Representation of the [[BlanketAgreementsDocument.uoMCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uoMCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UoMCode', this, 'Edm.String');
  /**
   * Representation of the [[BlanketAgreementsDocument.unitsOfMeasurement]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  unitsOfMeasurement: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UnitsOfMeasurement', this, 'Edm.Double');
  /**
   * Representation of the [[BlanketAgreementsDocument.docStatus]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  docStatus: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DocStatus', this);

  /**
   * Creates an instance of BlanketAgreementsDocumentField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BlanketAgreementsDocument);
  }
}

export namespace BlanketAgreementsDocument {
  /**
   * Metadata information on all properties of the `BlanketAgreementsDocument` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BlanketAgreementsDocument>[] = [{
    originalName: 'AgreementRowNumber',
    name: 'agreementRowNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocumentType',
    name: 'documentType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'DocumentNo',
    name: 'documentNo',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocumentRowNumber',
    name: 'documentRowNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'DocumentDate',
    name: 'documentDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ItemNo',
    name: 'itemNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemDescription',
    name: 'itemDescription',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UnitPrice',
    name: 'unitPrice',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Quantity',
    name: 'quantity',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Discount',
    name: 'discount',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'UoM',
    name: 'uoM',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'RowStatus',
    name: 'rowStatus',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'UoMCode',
    name: 'uoMCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UnitsOfMeasurement',
    name: 'unitsOfMeasurement',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'DocStatus',
    name: 'docStatus',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BlanketAgreementsDocument {
    return deserializeComplexTypeV4(json, BlanketAgreementsDocument);
  }
}
