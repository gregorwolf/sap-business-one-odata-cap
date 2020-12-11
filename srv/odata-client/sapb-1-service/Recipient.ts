/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoMsgRcpTypes } from './BoMsgRcpTypes';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * Recipient
 */
export interface Recipient {
  /**
   * User Code.
   * @nullable
   */
  userCode?: string;
  /**
   * User Type.
   * @nullable
   */
  userType?: BoMsgRcpTypes;
  /**
   * Name To.
   * @nullable
   */
  nameTo?: string;
  /**
   * Send Email.
   * @nullable
   */
  sendEmail?: BoYesNoEnum;
  /**
   * Email Address.
   * @nullable
   */
  emailAddress?: string;
  /**
   * Send Sms.
   * @nullable
   */
  sendSms?: BoYesNoEnum;
  /**
   * Cellular Number.
   * @nullable
   */
  cellularNumber?: string;
  /**
   * Send Fax.
   * @nullable
   */
  sendFax?: BoYesNoEnum;
  /**
   * Fax Number.
   * @nullable
   */
  faxNumber?: string;
  /**
   * Send Internal.
   * @nullable
   */
  sendInternal?: BoYesNoEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[Recipient.build]] instead.
 */
export function createRecipient(json: any): Recipient {
  return Recipient.build(json);
}

/**
 * RecipientField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class RecipientField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, Recipient> {
  /**
   * Representation of the [[Recipient.userCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('UserCode', this, 'Edm.String');
  /**
   * Representation of the [[Recipient.userType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('UserType', this);
  /**
   * Representation of the [[Recipient.nameTo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nameTo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('NameTo', this, 'Edm.String');
  /**
   * Representation of the [[Recipient.sendEmail]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sendEmail: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SendEmail', this);
  /**
   * Representation of the [[Recipient.emailAddress]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  emailAddress: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('EmailAddress', this, 'Edm.String');
  /**
   * Representation of the [[Recipient.sendSms]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sendSms: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SendSMS', this);
  /**
   * Representation of the [[Recipient.cellularNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cellularNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CellularNumber', this, 'Edm.String');
  /**
   * Representation of the [[Recipient.sendFax]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sendFax: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SendFax', this);
  /**
   * Representation of the [[Recipient.faxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  faxNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FaxNumber', this, 'Edm.String');
  /**
   * Representation of the [[Recipient.sendInternal]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sendInternal: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('SendInternal', this);

  /**
   * Creates an instance of RecipientField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, Recipient);
  }
}

export namespace Recipient {
  /**
   * Metadata information on all properties of the `Recipient` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Recipient>[] = [{
    originalName: 'UserCode',
    name: 'userCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'UserType',
    name: 'userType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'NameTo',
    name: 'nameTo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SendEmail',
    name: 'sendEmail',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'EmailAddress',
    name: 'emailAddress',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SendSMS',
    name: 'sendSms',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'CellularNumber',
    name: 'cellularNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'SendFax',
    name: 'sendFax',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'FaxNumber',
    name: 'faxNumber',
    type: 'Edm.String',
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
  export function build(json: { [keys: string]: FieldType }): Recipient {
    return deserializeComplexTypeV4(json, Recipient);
  }
}
