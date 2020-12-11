/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * Forms1099Params
 */
export interface Forms1099Params {
  /**
   * Form Code.
   * @nullable
   */
  formCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[Forms1099Params.build]] instead.
 */
export function createForms1099Params(json: any): Forms1099Params {
  return Forms1099Params.build(json);
}

/**
 * Forms1099ParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class Forms1099ParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, Forms1099Params> {
  /**
   * Representation of the [[Forms1099Params.formCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FormCode', this, 'Edm.Int32');

  /**
   * Creates an instance of Forms1099ParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, Forms1099Params);
  }
}

export namespace Forms1099Params {
  /**
   * Metadata information on all properties of the `Forms1099Params` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Forms1099Params>[] = [{
    originalName: 'FormCode',
    name: 'formCode',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): Forms1099Params {
    return deserializeComplexTypeV4(json, Forms1099Params);
  }
}
