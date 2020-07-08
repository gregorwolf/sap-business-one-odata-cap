/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { CallArgument, CallArgumentField } from './CallArgument';
import { CallMessage, CallMessageField } from './CallMessage';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * ExternalCall
 */
export interface ExternalCall {
  /**
   * Id.
   * @nullable
   */
  id?: number;
  /**
   * Category.
   * @nullable
   */
  category?: number;
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
   * Last Update Date.
   * @nullable
   */
  lastUpdateDate?: Moment;
  /**
   * Last Update Time.
   * @nullable
   */
  lastUpdateTime?: number;
  /**
   * Last Update User Code.
   * @nullable
   */
  lastUpdateUserCode?: string;
  /**
   * Call Arguments.
   * @nullable
   */
  callArguments?: CallArgument;
  /**
   * Call Messages.
   * @nullable
   */
  callMessages?: CallMessage;
}

/**
 * @deprecated Since v1.6.0. Use [[ExternalCall.build]] instead.
 */
export function createExternalCall(json: any): ExternalCall {
  return ExternalCall.build(json);
}

/**
 * ExternalCallField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ExternalCallField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ExternalCall.id]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ID', this, 'Edm.Int32');
  /**
   * Representation of the [[ExternalCall.category]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  category: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Category', this, 'Edm.Int32');
  /**
   * Representation of the [[ExternalCall.creationDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creationDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('CreationDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ExternalCall.creationTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  creationTime: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CreationTime', this, 'Edm.Int32');
  /**
   * Representation of the [[ExternalCall.lastUpdateDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastUpdateDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('LastUpdateDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ExternalCall.lastUpdateTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastUpdateTime: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LastUpdateTime', this, 'Edm.Int32');
  /**
   * Representation of the [[ExternalCall.lastUpdateUserCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastUpdateUserCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('LastUpdateUserCode', this, 'Edm.String');
  /**
   * Representation of the [[ExternalCall.callArguments]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  callArguments: CallArgumentField<EntityT> = new CallArgumentField('CallArguments', this);
  /**
   * Representation of the [[ExternalCall.callMessages]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  callMessages: CallMessageField<EntityT> = new CallMessageField('CallMessages', this);
}

export namespace ExternalCall {
  export function build(json: { [keys: string]: FieldType | CallArgument | CallMessage }): ExternalCall {
    return createComplexType(json, {
      ID: (id: number) => ({ id: edmToTs(id, 'Edm.Int32') }),
      Category: (category: number) => ({ category: edmToTs(category, 'Edm.Int32') }),
      CreationDate: (creationDate: Moment) => ({ creationDate: edmToTs(creationDate, 'Edm.DateTimeOffset') }),
      CreationTime: (creationTime: number) => ({ creationTime: edmToTs(creationTime, 'Edm.Int32') }),
      LastUpdateDate: (lastUpdateDate: Moment) => ({ lastUpdateDate: edmToTs(lastUpdateDate, 'Edm.DateTimeOffset') }),
      LastUpdateTime: (lastUpdateTime: number) => ({ lastUpdateTime: edmToTs(lastUpdateTime, 'Edm.Int32') }),
      LastUpdateUserCode: (lastUpdateUserCode: string) => ({ lastUpdateUserCode: edmToTs(lastUpdateUserCode, 'Edm.String') }),
      CallArguments: (callArguments: CallArgument) => ({ callArguments: CallArgument.build(callArguments) }),
      CallMessages: (callMessages: CallMessage) => ({ callMessages: CallMessage.build(callMessages) })
    });
  }
}
