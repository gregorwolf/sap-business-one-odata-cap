/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { CallMessageArgument, CallMessageArgumentField } from './CallMessageArgument';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * CallMessage
 */
export interface CallMessage {
  /**
   * Id.
   * @nullable
   */
  id?: number;
  /**
   * Error Code.
   * @nullable
   */
  errorCode?: string;
  /**
   * Message Body.
   * @nullable
   */
  messageBody?: string;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: Moment;
  /**
   * Creation Time.
   * @nullable
   */
  creationTime?: number;
  /**
   * Call Message Arguments.
   * @nullable
   */
  callMessageArguments?: CallMessageArgument;
}

/**
 * @deprecated Since v1.6.0. Use [[CallMessage.build]] instead.
 */
export function createCallMessage(json: any): CallMessage {
  return CallMessage.build(json);
}

/**
 * CallMessageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CallMessageField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CallMessage.id]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ID', this, 'Edm.Int32');
  /**
   * Representation of the [[CallMessage.errorCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  errorCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ErrorCode', this, 'Edm.String');
  /**
   * Representation of the [[CallMessage.messageBody]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  messageBody: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('MessageBody', this, 'Edm.String');
  /**
   * Representation of the [[CallMessage.creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creationDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('CreationDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[CallMessage.creationTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creationTime: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CreationTime', this, 'Edm.Int32');
  /**
   * Representation of the [[CallMessage.callMessageArguments]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  callMessageArguments: CallMessageArgumentField<EntityT> = new CallMessageArgumentField('CallMessageArguments', this);
}

export namespace CallMessage {
  export function build(json: { [keys: string]: FieldType | CallMessageArgument }): CallMessage {
    return createComplexType(json, {
      ID: (id: number) => ({ id: edmToTs(id, 'Edm.Int32') }),
      ErrorCode: (errorCode: string) => ({ errorCode: edmToTs(errorCode, 'Edm.String') }),
      MessageBody: (messageBody: string) => ({ messageBody: edmToTs(messageBody, 'Edm.String') }),
      CreationDate: (creationDate: Moment) => ({ creationDate: edmToTs(creationDate, 'Edm.DateTimeOffset') }),
      CreationTime: (creationTime: number) => ({ creationTime: edmToTs(creationTime, 'Edm.Int32') }),
      CallMessageArguments: (callMessageArguments: CallMessageArgument) => ({ callMessageArguments: CallMessageArgument.build(callMessageArguments) })
    });
  }
}
