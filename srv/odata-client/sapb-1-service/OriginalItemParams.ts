/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * OriginalItemParams
 */
export interface OriginalItemParams {
  /**
   * Item Code.
   * @nullable
   */
  itemCode?: string;
  /**
   * Item Name.
   * @nullable
   */
  itemName?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[OriginalItemParams.build]] instead.
 */
export function createOriginalItemParams(json: any): OriginalItemParams {
  return OriginalItemParams.build(json);
}

/**
 * OriginalItemParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class OriginalItemParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, OriginalItemParams> {
  /**
   * Representation of the [[OriginalItemParams.itemCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemCode', this, 'Edm.String');
  /**
   * Representation of the [[OriginalItemParams.itemName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  itemName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ItemName', this, 'Edm.String');

  /**
   * Creates an instance of OriginalItemParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, OriginalItemParams);
  }
}

export namespace OriginalItemParams {
  /**
   * Metadata information on all properties of the `OriginalItemParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<OriginalItemParams>[] = [{
    originalName: 'ItemCode',
    name: 'itemCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ItemName',
    name: 'itemName',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): OriginalItemParams {
    return deserializeComplexTypeV4(json, OriginalItemParams);
  }
}
