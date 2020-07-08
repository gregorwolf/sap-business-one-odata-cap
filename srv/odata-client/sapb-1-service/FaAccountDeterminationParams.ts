/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * FaAccountDeterminationParams
 */
export interface FaAccountDeterminationParams {
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Description.
   * @nullable
   */
  description?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[FaAccountDeterminationParams.build]] instead.
 */
export function createFaAccountDeterminationParams(json: any): FaAccountDeterminationParams {
  return FaAccountDeterminationParams.build(json);
}

/**
 * FaAccountDeterminationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class FaAccountDeterminationParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[FaAccountDeterminationParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Code', this, 'Edm.String');
  /**
   * Representation of the [[FaAccountDeterminationParams.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Description', this, 'Edm.String');
}

export namespace FaAccountDeterminationParams {
  export function build(json: { [keys: string]: FieldType }): FaAccountDeterminationParams {
    return createComplexType(json, {
      Code: (code: string) => ({ code: edmToTs(code, 'Edm.String') }),
      Description: (description: string) => ({ description: edmToTs(description, 'Edm.String') })
    });
  }
}
