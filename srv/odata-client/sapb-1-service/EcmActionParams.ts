/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * EcmActionParams
 */
export interface EcmActionParams {
  /**
   * Action Id.
   * @nullable
   */
  actionId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[EcmActionParams.build]] instead.
 */
export function createEcmActionParams(json: any): EcmActionParams {
  return EcmActionParams.build(json);
}

/**
 * EcmActionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EcmActionParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EcmActionParams.actionId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actionId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActionID', this, 'Edm.Int32');
}

export namespace EcmActionParams {
  export function build(json: { [keys: string]: FieldType }): EcmActionParams {
    return createComplexType(json, {
      ActionID: (actionId: number) => ({ actionId: edmToTs(actionId, 'Edm.Int32') })
    });
  }
}
