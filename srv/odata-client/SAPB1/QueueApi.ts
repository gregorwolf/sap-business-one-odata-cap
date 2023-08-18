/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Queue } from './Queue';
import { QueueRequestBuilder } from './QueueRequestBuilder';
import { ServiceCallsApi } from './ServiceCallsApi';
import { UsersApi } from './UsersApi';
import { QueueMember } from './QueueMember';
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  CollectionField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class QueueApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Queue<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): QueueApi<DeSerializersT> {
    return new QueueApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link serviceCalls} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALLS: OneToManyLink<
      Queue<DeSerializersT>,
      DeSerializersT,
      ServiceCallsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      Queue<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ServiceCallsApi<DeSerializersT>, UsersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      SERVICE_CALLS: new OneToManyLink('ServiceCalls', this, linkedApis[0]),
      USER: new OneToOneLink('User', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = Queue;

  requestBuilder(): QueueRequestBuilder<DeSerializersT> {
    return new QueueRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Queue<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Queue<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Queue<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Queue, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Queue, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    QUEUE_ID: OrderableEdmTypeField<
      Queue<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Queue<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INACTIVE: EnumField<
      Queue<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    QUEUE_MANAGER: OrderableEdmTypeField<
      Queue<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    QUEUE_EMAIL: OrderableEdmTypeField<
      Queue<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUEUE_MEMBERS: CollectionField<
      Queue<DeSerializers>,
      DeSerializersT,
      QueueMember,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceCalls} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALLS: OneToManyLink<
      Queue<DeSerializersT>,
      DeSerializersT,
      ServiceCallsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      Queue<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Queue<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link queueId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUEUE_ID: fieldBuilder.buildEdmTypeField(
          'QueueID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inactive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INACTIVE: fieldBuilder.buildEnumField('Inactive', BoYesNoEnum, true),
        /**
         * Static representation of the {@link queueManager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUEUE_MANAGER: fieldBuilder.buildEdmTypeField(
          'QueueManager',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link queueEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUEUE_EMAIL: fieldBuilder.buildEdmTypeField(
          'QueueEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link queueMembers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUEUE_MEMBERS: fieldBuilder.buildCollectionField(
          'QueueMembers',
          QueueMember,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Queue)
      };
    }

    return this._schema;
  }
}
