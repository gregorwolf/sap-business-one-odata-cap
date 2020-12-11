/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * FormattedSearchParams
 */
export interface FormattedSearchParams {
  /**
   * Index.
   * @nullable
   */
  index?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[FormattedSearchParams.build]] instead.
 */
export function createFormattedSearchParams(json: any): FormattedSearchParams {
  return FormattedSearchParams.build(json);
}

/**
 * FormattedSearchParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class FormattedSearchParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, FormattedSearchParams> {
  /**
   * Representation of the [[FormattedSearchParams.index]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  index: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Index', this, 'Edm.Int32');

  /**
   * Creates an instance of FormattedSearchParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, FormattedSearchParams);
  }
}

export namespace FormattedSearchParams {
  /**
   * Metadata information on all properties of the `FormattedSearchParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<FormattedSearchParams>[] = [{
    originalName: 'Index',
    name: 'index',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): FormattedSearchParams {
    return deserializeComplexTypeV4(json, FormattedSearchParams);
  }
}
