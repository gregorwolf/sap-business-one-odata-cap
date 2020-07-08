/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ValidValueMdField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace ValidValueMd {
  export function build(json: { [keys: string]: FieldType }): ValidValueMd {
    return createComplexType(json, {
      Value: (value: string) => ({ value: edmToTs(value, 'Edm.String') }),
      Description: (description: string) => ({ description: edmToTs(description, 'Edm.String') })
    });
  }
}
