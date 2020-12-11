/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ValidValueMd
 */
export interface ValidValueMd {
  /**
   * Value.
   * @nullable
   */
  value?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ValidValueMd.build]] instead.
 */
export function createValidValueMd(json: any): ValidValueMd {
  return ValidValueMd.build(json);
}

/**
 * ValidValueMdField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ValidValueMdField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ValidValueMd> {
  /**
   * Representation of the [[ValidValueMd.value]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Value', this, 'Edm.String');
  /**
   * Representation of the [[ValidValueMd.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');

  /**
   * Creates an instance of ValidValueMdField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ValidValueMd);
  }
}

export namespace ValidValueMd {
  /**
   * Metadata information on all properties of the `ValidValueMd` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ValidValueMd>[] = [{
    originalName: 'Value',
    name: 'value',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Description',
    name: 'description',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ValidValueMd {
    return deserializeComplexTypeV4(json, ValidValueMd);
  }
}
