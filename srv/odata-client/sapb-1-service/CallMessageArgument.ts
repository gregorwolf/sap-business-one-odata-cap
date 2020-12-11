/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * CallMessageArgument
 */
export interface CallMessageArgument {
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
 * @deprecated Since v1.6.0. Use [[CallMessageArgument.build]] instead.
 */
export function createCallMessageArgument(json: any): CallMessageArgument {
  return CallMessageArgument.build(json);
}

/**
 * CallMessageArgumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CallMessageArgumentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CallMessageArgument> {
  /**
   * Representation of the [[CallMessageArgument.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
  /**
   * Representation of the [[CallMessageArgument.value]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Value', this, 'Edm.String');

  /**
   * Creates an instance of CallMessageArgumentField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CallMessageArgument);
  }
}

export namespace CallMessageArgument {
  /**
   * Metadata information on all properties of the `CallMessageArgument` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CallMessageArgument>[] = [{
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
  export function build(json: { [keys: string]: FieldType }): CallMessageArgument {
    return deserializeComplexTypeV4(json, CallMessageArgument);
  }
}
