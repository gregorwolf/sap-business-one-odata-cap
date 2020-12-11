/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { CallMessageArgument } from './CallMessageArgument';
import { CallMessageTypeEnum } from './CallMessageTypeEnum';
import { CallMessageStatusEnum } from './CallMessageStatusEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Type.
   * @nullable
   */
  type?: CallMessageTypeEnum;
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
   * Status.
   * @nullable
   */
  status?: CallMessageStatusEnum;
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
  callMessageArguments?: CallMessageArgument[];
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
export class CallMessageField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CallMessage> {
  /**
   * Representation of the [[CallMessage.id]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ID', this, 'Edm.Int32');
  /**
   * Representation of the [[CallMessage.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Type', this);
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
   * Representation of the [[CallMessage.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Status', this);
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
  callMessageArguments: CollectionField<EntityT, CallMessageArgument> = new CollectionField('CallMessageArguments', this, CallMessageArgument);

  /**
   * Creates an instance of CallMessageField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, CallMessage);
  }
}

export namespace CallMessage {
  /**
   * Metadata information on all properties of the `CallMessage` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CallMessage>[] = [{
    originalName: 'ID',
    name: 'id',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Type',
    name: 'type',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'ErrorCode',
    name: 'errorCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'MessageBody',
    name: 'messageBody',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Status',
    name: 'status',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'CreationDate',
    name: 'creationDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'CreationTime',
    name: 'creationTime',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'CallMessageArguments',
    name: 'callMessageArguments',
    type: CallMessageArgument,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | CallMessageArgument }): CallMessage {
    return deserializeComplexTypeV4(json, CallMessage);
  }
}
