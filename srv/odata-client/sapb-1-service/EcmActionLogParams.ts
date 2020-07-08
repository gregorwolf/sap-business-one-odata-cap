/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * EcmActionLogParams
 */
export interface EcmActionLogParams {
  /**
   * Action Id.
   * @nullable
   */
  actionId?: number;
  /**
   * Log Id.
   * @nullable
   */
  logId?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[EcmActionLogParams.build]] instead.
 */
export function createEcmActionLogParams(json: any): EcmActionLogParams {
  return EcmActionLogParams.build(json);
}

/**
 * EcmActionLogParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EcmActionLogParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EcmActionLogParams.actionId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actionId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActionID', this, 'Edm.Int32');
  /**
   * Representation of the [[EcmActionLogParams.logId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LogID', this, 'Edm.Int32');
}

export namespace EcmActionLogParams {
  export function build(json: { [keys: string]: FieldType }): EcmActionLogParams {
    return createComplexType(json, {
      ActionID: (actionId: number) => ({ actionId: edmToTs(actionId, 'Edm.Int32') }),
      LogID: (logId: number) => ({ logId: edmToTs(logId, 'Edm.Int32') })
    });
  }
}
