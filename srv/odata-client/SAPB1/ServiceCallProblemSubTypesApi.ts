/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceCallProblemSubTypes } from './ServiceCallProblemSubTypes';
import { ServiceCallProblemSubTypesRequestBuilder } from './ServiceCallProblemSubTypesRequestBuilder';
import { ServiceCallsApi } from './ServiceCallsApi';
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
export class ServiceCallProblemSubTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ServiceCallProblemSubTypes<DeSerializersT>, DeSerializersT>
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
  ): ServiceCallProblemSubTypesApi<DeSerializersT> {
    return new ServiceCallProblemSubTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link serviceCalls} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALLS: OneToManyLink<
      ServiceCallProblemSubTypes<DeSerializersT>,
      DeSerializersT,
      ServiceCallsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ServiceCallsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      SERVICE_CALLS: new OneToManyLink('ServiceCalls', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ServiceCallProblemSubTypes;

  requestBuilder(): ServiceCallProblemSubTypesRequestBuilder<DeSerializersT> {
    return new ServiceCallProblemSubTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ServiceCallProblemSubTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ServiceCallProblemSubTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ServiceCallProblemSubTypes<DeSerializersT>,
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
    typeof ServiceCallProblemSubTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ServiceCallProblemSubTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROBLEM_SUB_TYPE_ID: OrderableEdmTypeField<
      ServiceCallProblemSubTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ServiceCallProblemSubTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ServiceCallProblemSubTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE: EnumField<
      ServiceCallProblemSubTypes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceCalls} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CALLS: OneToManyLink<
      ServiceCallProblemSubTypes<DeSerializersT>,
      DeSerializersT,
      ServiceCallsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ServiceCallProblemSubTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link problemSubTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROBLEM_SUB_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ProblemSubTypeID',
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
        ALL_FIELDS: new AllFields('*', ServiceCallProblemSubTypes)
      };
    }

    return this._schema;
  }
}
