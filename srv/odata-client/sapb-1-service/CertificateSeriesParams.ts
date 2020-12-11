/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * CertificateSeriesParams
 */
export interface CertificateSeriesParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Section.
   * @nullable
   */
  section?: number;
  /**
   * Location.
   * @nullable
   */
  location?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[CertificateSeriesParams.build]] instead.
 */
export function createCertificateSeriesParams(json: any): CertificateSeriesParams {
  return CertificateSeriesParams.build(json);
}

/**
 * CertificateSeriesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CertificateSeriesParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CertificateSeriesParams> {
  /**
   * Representation of the [[CertificateSeriesParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[CertificateSeriesParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[CertificateSeriesParams.section]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  section: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Section', this, 'Edm.Int32');
  /**
   * Representation of the [[CertificateSeriesParams.location]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  location: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Location', this, 'Edm.Int32');

  /**
   * Creates an instance of CertificateSeriesParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CertificateSeriesParams);
  }
}

export namespace CertificateSeriesParams {
  /**
   * Metadata information on all properties of the `CertificateSeriesParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CertificateSeriesParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Section',
    name: 'section',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Location',
    name: 'location',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CertificateSeriesParams {
    return deserializeComplexTypeV4(json, CertificateSeriesParams);
  }
}
