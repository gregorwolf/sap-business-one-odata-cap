/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ResourceFixedAsset
 */
export interface ResourceFixedAsset {
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ResourceFixedAsset.build]] instead.
 */
export function createResourceFixedAsset(json: any): ResourceFixedAsset {
  return ResourceFixedAsset.build(json);
}

/**
 * ResourceFixedAssetField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ResourceFixedAssetField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ResourceFixedAsset> {
  /**
   * Representation of the [[ResourceFixedAsset.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[ResourceFixedAsset.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');

  /**
   * Creates an instance of ResourceFixedAssetField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ResourceFixedAsset);
  }
}

export namespace ResourceFixedAsset {
  /**
   * Metadata information on all properties of the `ResourceFixedAsset` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ResourceFixedAsset>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ResourceFixedAsset {
    return deserializeComplexTypeV4(json, ResourceFixedAsset);
  }
}
