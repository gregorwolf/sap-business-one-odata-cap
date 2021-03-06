/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * Attachments2Params
 */
export interface Attachments2Params {
  /**
   * Absolute Entry.
   * @nullable
   */
  absoluteEntry?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[Attachments2Params.build]] instead.
 */
export function createAttachments2Params(json: any): Attachments2Params {
  return Attachments2Params.build(json);
}

/**
 * Attachments2ParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class Attachments2ParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, Attachments2Params> {
  /**
   * Representation of the [[Attachments2Params.absoluteEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absoluteEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('AbsoluteEntry', this, 'Edm.Int32');

  /**
   * Creates an instance of Attachments2ParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, Attachments2Params);
  }
}

export namespace Attachments2Params {
  /**
   * Metadata information on all properties of the `Attachments2Params` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Attachments2Params>[] = [{
    originalName: 'AbsoluteEntry',
    name: 'absoluteEntry',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): Attachments2Params {
    return deserializeComplexTypeV4(json, Attachments2Params);
  }
}
