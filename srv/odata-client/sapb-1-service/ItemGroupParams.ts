/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ItemGroupParams
 */
export interface ItemGroupParams {
  /**
   * Number.
   * @nullable
   */
  number?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemGroupParams.build]] instead.
 */
export function createItemGroupParams(json: any): ItemGroupParams {
  return ItemGroupParams.build(json);
}

/**
 * ItemGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemGroupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemGroupParams> {
  /**
   * Representation of the [[ItemGroupParams.number]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  number: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Number', this, 'Edm.Int32');

  /**
   * Creates an instance of ItemGroupParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ItemGroupParams);
  }
}

export namespace ItemGroupParams {
  /**
   * Metadata information on all properties of the `ItemGroupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemGroupParams>[] = [{
    originalName: 'Number',
    name: 'number',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ItemGroupParams {
    return deserializeComplexTypeV4(json, ItemGroupParams);
  }
}
