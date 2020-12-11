/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * AlertManagementRecipient
 */
export interface AlertManagementRecipient {
  /**
   * User Code.
   * @nullable
   */
  userCode?: number;
  /**
   * Send E Mail.
   * @nullable
   */
  sendEMail?: BoYesNoEnum;
  /**
   * Send Sms.
   * @nullable
   */
  sendSms?: BoYesNoEnum;
  /**
   * Send Fax.
   * @nullable
   */
  sendFax?: BoYesNoEnum;
  /**
   * Send Internal.
   * @nullable
   */
  sendInternal?: BoYesNoEnum;
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
export class AlertManagementRecipientField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, AlertManagementRecipient> {
  /**
   * Representation of the [[AlertManagementRecipient.userCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userCode: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('UserCode', this, 'Edm.Int32');
  /**
   * Representation of the [[AlertManagementRecipient.sendEMail]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sendEMail: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SendEMail', this);
  /**
   * Representation of the [[AlertManagementRecipient.sendSms]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sendSms: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SendSMS', this);
  /**
   * Representation of the [[AlertManagementRecipient.sendFax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sendFax: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SendFax', this);
  /**
   * Representation of the [[AlertManagementRecipient.sendInternal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sendInternal: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SendInternal', this);

  /**
   * Creates an instance of AlertManagementRecipientField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, AlertManagementRecipient);
  }
}

export namespace AlertManagementRecipient {
  /**
   * Metadata information on all properties of the `AlertManagementRecipient` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AlertManagementRecipient>[] = [{
    originalName: 'UserCode',
    name: 'userCode',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'SendEMail',
    name: 'sendEMail',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SendSMS',
    name: 'sendSms',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SendFax',
    name: 'sendFax',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SendInternal',
    name: 'sendInternal',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): AlertManagementRecipient {
    return deserializeComplexTypeV4(json, AlertManagementRecipient);
  }
}
