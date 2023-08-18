/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { KnowledgeBaseSolutions } from './KnowledgeBaseSolutions';
import { KnowledgeBaseSolutionsRequestBuilder } from './KnowledgeBaseSolutionsRequestBuilder';
import { ItemsApi } from './ItemsApi';
import { ServiceCallSolutionStatusApi } from './ServiceCallSolutionStatusApi';
import { UsersApi } from './UsersApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class KnowledgeBaseSolutionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<KnowledgeBaseSolutions<DeSerializersT>, DeSerializersT>
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
  ): KnowledgeBaseSolutionsApi<DeSerializersT> {
    return new KnowledgeBaseSolutionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      KnowledgeBaseSolutions<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceCallSolutionStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALL_SOLUTION_STATUS: OneToOneLink<
      KnowledgeBaseSolutions<DeSerializersT>,
      DeSerializersT,
      ServiceCallSolutionStatusApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      KnowledgeBaseSolutions<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ItemsApi<DeSerializersT>,
      ServiceCallSolutionStatusApi<DeSerializersT>,
      UsersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ITEM: new OneToOneLink('Item', this, linkedApis[0]),
      SERVICE_CALL_SOLUTION_STATUS: new OneToOneLink(
        'ServiceCallSolutionStatus',
        this,
        linkedApis[1]
      ),
      USER: new OneToOneLink('User', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = KnowledgeBaseSolutions;

  requestBuilder(): KnowledgeBaseSolutionsRequestBuilder<DeSerializersT> {
    return new KnowledgeBaseSolutionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    KnowledgeBaseSolutions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      KnowledgeBaseSolutions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    KnowledgeBaseSolutions<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof KnowledgeBaseSolutions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        KnowledgeBaseSolutions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ITEM_CODE: OrderableEdmTypeField<
      KnowledgeBaseSolutions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      KnowledgeBaseSolutions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    OWNER: OrderableEdmTypeField<
      KnowledgeBaseSolutions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      KnowledgeBaseSolutions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      KnowledgeBaseSolutions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_UPDATED_BY: OrderableEdmTypeField<
      KnowledgeBaseSolutions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LAST_UPDATE_DATE: OrderableEdmTypeField<
      KnowledgeBaseSolutions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SOLUTION: OrderableEdmTypeField<
      KnowledgeBaseSolutions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYMPTOM: OrderableEdmTypeField<
      KnowledgeBaseSolutions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAUSE: OrderableEdmTypeField<
      KnowledgeBaseSolutions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      KnowledgeBaseSolutions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOLUTION_CODE: OrderableEdmTypeField<
      KnowledgeBaseSolutions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      KnowledgeBaseSolutions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      KnowledgeBaseSolutions<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link serviceCallSolutionStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALL_SOLUTION_STATUS: OneToOneLink<
      KnowledgeBaseSolutions<DeSerializersT>,
      DeSerializersT,
      ServiceCallSolutionStatusApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      KnowledgeBaseSolutions<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<KnowledgeBaseSolutions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link itemCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CODE: fieldBuilder.buildEdmTypeField(
          'ItemCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.Int32', true),
        /**
         * Static representation of the {@link owner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNER: fieldBuilder.buildEdmTypeField('Owner', 'Edm.Int32', true),
        /**
         * Static representation of the {@link createdBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY: fieldBuilder.buildEdmTypeField(
          'CreatedBy',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link creationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'CreationDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link lastUpdatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_UPDATED_BY: fieldBuilder.buildEdmTypeField(
          'LastUpdatedBy',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link lastUpdateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_UPDATE_DATE: fieldBuilder.buildEdmTypeField(
          'LastUpdateDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link solution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOLUTION: fieldBuilder.buildEdmTypeField(
          'Solution',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link symptom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYMPTOM: fieldBuilder.buildEdmTypeField('Symptom', 'Edm.String', true),
        /**
         * Static representation of the {@link cause} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAUSE: fieldBuilder.buildEdmTypeField('Cause', 'Edm.String', true),
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
         * Static representation of the {@link solutionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOLUTION_CODE: fieldBuilder.buildEdmTypeField(
          'SolutionCode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link attachmentEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_ENTRY: fieldBuilder.buildEdmTypeField(
          'AttachmentEntry',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', KnowledgeBaseSolutions)
      };
    }

    return this._schema;
  }
}
