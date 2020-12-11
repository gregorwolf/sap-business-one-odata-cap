/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * CallArgument
 */
export interface CallArgument {
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Value.
   * @nullable
   */
  value?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[CallArgument.build]] instead.
 */
export function createCallArgument(json: any): CallArgument {
  return CallArgument.build(json);
}

/**
 * CallArgumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CallArgumentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CallArgument> {
  /**
   * Representation of the [[CallArgument.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[CallArgument.value]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Value', this, 'Edm.String');

  /**
   * Creates an instance of CallArgumentField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CallArgument);
  }
}

export namespace CallArgument {
  /**
   * Metadata information on all properties of the `CallArgument` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CallArgument>[] = [{
    originalName: 'Name',
    name: 'name',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Value',
    name: 'value',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): CallArgument {
    return deserializeComplexTypeV4(json, CallArgument);
  }
}
