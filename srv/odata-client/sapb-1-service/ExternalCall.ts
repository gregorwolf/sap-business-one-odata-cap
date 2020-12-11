/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { CallArgument } from './CallArgument';
import { CallMessage } from './CallMessage';
import { ExternalCallStatusEnum } from './ExternalCallStatusEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Status.
   * @nullable
   */
  status?: ExternalCallStatusEnum;
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
  callArguments?: CallArgument[];
  /**
   * Call Messages.
   * @nullable
   */
  callMessages?: CallMessage[];
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
export class ExternalCallField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ExternalCall> {
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
   * Representation of the [[ExternalCall.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Status', this);
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
  callArguments: CollectionField<EntityT, CallArgument> = new CollectionField('CallArguments', this, CallArgument);
  /**
   * Representation of the [[ExternalCall.callMessages]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  callMessages: CollectionField<EntityT, CallMessage> = new CollectionField('CallMessages', this, CallMessage);

  /**
   * Creates an instance of ExternalCallField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ExternalCall);
  }
}

export namespace ExternalCall {
  /**
   * Metadata information on all properties of the `ExternalCall` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExternalCall>[] = [{
    originalName: 'ID',
    name: 'id',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Category',
    name: 'category',
    type: 'Edm.Int32',
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
    originalName: 'LastUpdateDate',
    name: 'lastUpdateDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'LastUpdateTime',
    name: 'lastUpdateTime',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LastUpdateUserCode',
    name: 'lastUpdateUserCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CallArguments',
    name: 'callArguments',
    type: CallArgument,
    isCollection: true
  }, {
    originalName: 'CallMessages',
    name: 'callMessages',
    type: CallMessage,
    isCollection: true
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType | CallArgument | CallMessage }): ExternalCall {
    return deserializeComplexTypeV4(json, ExternalCall);
  }
}
