/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeIdType } from './EmployeeIdType';
import { EmployeeIdTypeRequestBuilder } from './EmployeeIdTypeRequestBuilder';
import { EmployeesInfoApi } from './EmployeesInfoApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class EmployeeIdTypeApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EmployeeIdType<DeSerializersT>, DeSerializersT>
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
  ): EmployeeIdTypeApi<DeSerializersT> {
    return new EmployeeIdTypeApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link employeesInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_INFO: OneToManyLink<
      EmployeeIdType<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [EmployeesInfoApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      EMPLOYEES_INFO: new OneToManyLink('EmployeesInfo', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = EmployeeIdType;

  requestBuilder(): EmployeeIdTypeRequestBuilder<DeSerializersT> {
    return new EmployeeIdTypeRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EmployeeIdType<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EmployeeIdType<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EmployeeIdType<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof EmployeeIdType, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(EmployeeIdType, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID_TYPE: OrderableEdmTypeField<
      EmployeeIdType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_INFO: OneToManyLink<
      EmployeeIdType<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EmployeeIdType<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link idType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID_TYPE: fieldBuilder.buildEdmTypeField('IDType', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EmployeeIdType)
      };
    }

    return this._schema;
  }
}
