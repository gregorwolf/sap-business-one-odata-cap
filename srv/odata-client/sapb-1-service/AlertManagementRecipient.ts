/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * AlertManagementRecipient
 */
export interface AlertManagementRecipient {
  /**
   * User Code.
   * @nullable
   */
  userCode?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[AlertManagementRecipient.build]] instead.
 */
export function createAlertManagementRecipient(json: any): AlertManagementRecipient {
  return AlertManagementRecipient.build(json);
}

/**
 * AlertManagementRecipientField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class AlertManagementRecipientField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[AlertManagementRecipient.userCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UserCode', this, 'Edm.Int32');
}

export namespace AlertManagementRecipient {
  export function build(json: { [keys: string]: FieldType }): AlertManagementRecipient {
    return createComplexType(json, {
      UserCode: (userCode: number) => ({ userCode: edmToTs(userCode, 'Edm.Int32') })
    });
  }
}
