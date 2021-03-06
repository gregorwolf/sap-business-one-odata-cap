/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * MessageHeader
 */
export interface MessageHeader {
  /**
   * Code.
   * @nullable
   */
  code?: number;
  /**
   * Received.
   * @nullable
   */
  received?: BoYesNoEnum;
  /**
   * Read.
   * @nullable
   */
  read?: BoYesNoEnum;
  /**
   * Received Date.
   * @nullable
   */
  receivedDate?: Moment;
  /**
   * Received Time.
   * @nullable
   */
  receivedTime?: Time;
  /**
   * Sent Date.
   * @nullable
   */
  sentDate?: Moment;
  /**
   * Sent Time.
   * @nullable
   */
  sentTime?: Time;
}

/**
 * @deprecated Since v1.6.0. Use [[MessageHeader.build]] instead.
 */
export function createMessageHeader(json: any): MessageHeader {
  return MessageHeader.build(json);
}

/**
 * MessageHeaderField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class MessageHeaderField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, MessageHeader> {
  /**
   * Representation of the [[MessageHeader.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
  /**
   * Representation of the [[MessageHeader.received]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  received: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Received', this);
  /**
   * Representation of the [[MessageHeader.read]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  read: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Read', this);
  /**
   * Representation of the [[MessageHeader.receivedDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  receivedDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ReceivedDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[MessageHeader.receivedTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  receivedTime: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('ReceivedTime', this, 'Edm.TimeOfDay');
  /**
   * Representation of the [[MessageHeader.sentDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sentDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('SentDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[MessageHeader.sentTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sentTime: ComplexTypeTimePropertyField<EntityT> = new ComplexTypeTimePropertyField('SentTime', this, 'Edm.TimeOfDay');

  /**
   * Creates an instance of MessageHeaderField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, MessageHeader);
  }
}

export namespace MessageHeader {
  /**
   * Metadata information on all properties of the `MessageHeader` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<MessageHeader>[] = [{
    originalName: 'Code',
    name: 'code',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Received',
    name: 'received',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Read',
    name: 'read',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ReceivedDate',
    name: 'receivedDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ReceivedTime',
    name: 'receivedTime',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }, {
    originalName: 'SentDate',
    name: 'sentDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'SentTime',
    name: 'sentTime',
    type: 'Edm.TimeOfDay',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): MessageHeader {
    return deserializeComplexTypeV4(json, MessageHeader);
  }
}
