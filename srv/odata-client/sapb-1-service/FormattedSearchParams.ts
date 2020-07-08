/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class FormattedSearchParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[FormattedSearchParams.index]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  index: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Index', this, 'Edm.Int32');
}

export namespace FormattedSearchParams {
  export function build(json: { [keys: string]: FieldType }): FormattedSearchParams {
    return createComplexType(json, {
      Index: (index: number) => ({ index: edmToTs(index, 'Edm.Int32') })
    });
  }
}
