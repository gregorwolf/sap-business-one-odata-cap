/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxReportFilterDocumentType } from './TaxReportFilterDocumentType';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TaxReportDocument
 */
export interface TaxReportDocument {
  /**
   * Document Type.
   * @nullable
   */
  documentType?: TaxReportFilterDocumentType;
  /**
   * From Number.
   * @nullable
   */
  fromNumber?: number;
  /**
   * To Number.
   * @nullable
   */
  toNumber?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxReportDocument.build]] instead.
 */
export function createTaxReportDocument(json: any): TaxReportDocument {
  return TaxReportDocument.build(json);
}

/**
 * TaxReportDocumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxReportDocumentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxReportDocument> {
  /**
   * Representation of the [[TaxReportDocument.documentType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  documentType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('DocumentType', this);
  /**
   * Representation of the [[TaxReportDocument.fromNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FromNumber', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxReportDocument.toNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ToNumber', this, 'Edm.Int32');

  /**
   * Creates an instance of TaxReportDocumentField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TaxReportDocument);
  }
}

export namespace TaxReportDocument {
  /**
   * Metadata information on all properties of the `TaxReportDocument` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxReportDocument>[] = [{
    originalName: 'DocumentType',
    name: 'documentType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'FromNumber',
    name: 'fromNumber',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ToNumber',
    name: 'toNumber',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TaxReportDocument {
    return deserializeComplexTypeV4(json, TaxReportDocument);
  }
}
