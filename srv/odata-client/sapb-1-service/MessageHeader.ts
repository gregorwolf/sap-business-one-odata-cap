/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeTimePropertyField, Entity, FieldType, Time, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class MessageHeaderField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[MessageHeader.code]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Code', this, 'Edm.Int32');
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
}

export namespace MessageHeader {
  export function build(json: { [keys: string]: FieldType }): MessageHeader {
    return createComplexType(json, {
      Code: (code: number) => ({ code: edmToTs(code, 'Edm.Int32') }),
      ReceivedDate: (receivedDate: Moment) => ({ receivedDate: edmToTs(receivedDate, 'Edm.DateTimeOffset') }),
      ReceivedTime: (receivedTime: Time) => ({ receivedTime: edmToTs(receivedTime, 'Edm.TimeOfDay') }),
      SentDate: (sentDate: Moment) => ({ sentDate: edmToTs(sentDate, 'Edm.DateTimeOffset') }),
      SentTime: (sentTime: Time) => ({ sentTime: edmToTs(sentTime, 'Edm.TimeOfDay') })
    });
  }
}
