/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * TaxWebSiteParams
 */
export interface TaxWebSiteParams {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Web Site Name.
   * @nullable
   */
  webSiteName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[TaxWebSiteParams.build]] instead.
 */
export function createTaxWebSiteParams(json: any): TaxWebSiteParams {
  return TaxWebSiteParams.build(json);
}

/**
 * TaxWebSiteParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TaxWebSiteParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, TaxWebSiteParams> {
  /**
   * Representation of the [[TaxWebSiteParams.absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[TaxWebSiteParams.webSiteName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  webSiteName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('WebSiteName', this, 'Edm.String');

  /**
   * Creates an instance of TaxWebSiteParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, TaxWebSiteParams);
  }
}

export namespace TaxWebSiteParams {
  /**
   * Metadata information on all properties of the `TaxWebSiteParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<TaxWebSiteParams>[] = [{
    originalName: 'AbsEntry',
    name: 'absEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'WebSiteName',
    name: 'webSiteName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): TaxWebSiteParams {
    return deserializeComplexTypeV4(json, TaxWebSiteParams);
  }
}
