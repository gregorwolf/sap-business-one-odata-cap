/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ActivityRecipientListParams
 */
export interface ActivityRecipientListParams {
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Name.
   * @nullable
   */
  name?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[ActivityRecipientListParams.build]] instead.
 */
export function createActivityRecipientListParams(json: any): ActivityRecipientListParams {
  return ActivityRecipientListParams.build(json);
}

/**
 * ActivityRecipientListParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ActivityRecipientListParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ActivityRecipientListParams.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
  /**
   * Representation of the [[ActivityRecipientListParams.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Name', this, 'Edm.String');
}

export namespace ActivityRecipientListParams {
  export function build(json: { [keys: string]: FieldType }): ActivityRecipientListParams {
    return createComplexType(json, {
      Code: (code: number) => ({ code: edmToTs(code, 'Edm.Int32') }),
      Name: (name: string) => ({ name: edmToTs(name, 'Edm.String') })
    });
  }
}
