/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceCallSolutionStatus } from './ServiceCallSolutionStatus';
import { ServiceCallSolutionStatusRequestBuilder } from './ServiceCallSolutionStatusRequestBuilder';
import { KnowledgeBaseSolutionsApi } from './KnowledgeBaseSolutionsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ServiceCallSolutionStatusApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ServiceCallSolutionStatus<DeSerializersT>, DeSerializersT>
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
  ): ServiceCallSolutionStatusApi<DeSerializersT> {
    return new ServiceCallSolutionStatusApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link knowledgeBaseSolutions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KNOWLEDGE_BASE_SOLUTIONS: OneToManyLink<
      ServiceCallSolutionStatus<DeSerializersT>,
      DeSerializersT,
      KnowledgeBaseSolutionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [KnowledgeBaseSolutionsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      KNOWLEDGE_BASE_SOLUTIONS: new OneToManyLink(
        'KnowledgeBaseSolutions',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ServiceCallSolutionStatus;

  requestBuilder(): ServiceCallSolutionStatusRequestBuilder<DeSerializersT> {
    return new ServiceCallSolutionStatusRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ServiceCallSolutionStatus<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ServiceCallSolutionStatus<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ServiceCallSolutionStatus<DeSerializersT>,
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
    typeof ServiceCallSolutionStatus,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ServiceCallSolutionStatus,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    STATUS_ID: OrderableEdmTypeField<
      ServiceCallSolutionStatus<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ServiceCallSolutionStatus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ServiceCallSolutionStatus<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE: EnumField<
      ServiceCallSolutionStatus<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link knowledgeBaseSolutions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KNOWLEDGE_BASE_SOLUTIONS: OneToManyLink<
      ServiceCallSolutionStatus<DeSerializersT>,
      DeSerializersT,
      KnowledgeBaseSolutionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ServiceCallSolutionStatus<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link statusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_ID: fieldBuilder.buildEdmTypeField(
          'StatusId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', BoYesNoEnum, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ServiceCallSolutionStatus)
      };
    }

    return this._schema;
  }
}
