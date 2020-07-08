/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class Forms1099ParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[Forms1099Params.formCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('FormCode', this, 'Edm.Int32');
}

export namespace Forms1099Params {
  export function build(json: { [keys: string]: FieldType }): Forms1099Params {
    return createComplexType(json, {
      FormCode: (formCode: number) => ({ formCode: edmToTs(formCode, 'Edm.Int32') })
    });
  }
}
