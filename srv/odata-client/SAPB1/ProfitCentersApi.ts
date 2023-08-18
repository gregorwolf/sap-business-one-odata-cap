/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProfitCenters } from './ProfitCenters';
import { ProfitCentersRequestBuilder } from './ProfitCentersRequestBuilder';
import { DimensionsApi } from './DimensionsApi';
import { CostCenterTypesApi } from './CostCenterTypesApi';
import { EmployeesInfoApi } from './EmployeesInfoApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProfitCentersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProfitCenters<DeSerializersT>, DeSerializersT>
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
  ): ProfitCentersApi<DeSerializersT> {
    return new ProfitCentersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION: OneToOneLink<
      ProfitCenters<DeSerializersT>,
      DeSerializersT,
      DimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link costCenterType2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COST_CENTER_TYPE_2: OneToOneLink<
      ProfitCenters<DeSerializersT>,
      DeSerializersT,
      CostCenterTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      ProfitCenters<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_INFO: OneToManyLink<
      ProfitCenters<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionsApi<DeSerializersT>,
      CostCenterTypesApi<DeSerializersT>,
      EmployeesInfoApi<DeSerializersT>,
      EmployeesInfoApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION: new OneToOneLink('Dimension', this, linkedApis[0]),
      COST_CENTER_TYPE_2: new OneToOneLink(
        'CostCenterType2',
        this,
        linkedApis[1]
      ),
      EMPLOYEE_INFO: new OneToOneLink('EmployeeInfo', this, linkedApis[2]),
      EMPLOYEES_INFO: new OneToManyLink('EmployeesInfo', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = ProfitCenters;

  requestBuilder(): ProfitCentersRequestBuilder<DeSerializersT> {
    return new ProfitCentersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProfitCenters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProfitCenters<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProfitCenters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProfitCenters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProfitCenters, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CENTER_CODE: OrderableEdmTypeField<
      ProfitCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CENTER_NAME: OrderableEdmTypeField<
      ProfitCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROUP_CODE: OrderableEdmTypeField<
      ProfitCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_WHICH_DIMENSION: OrderableEdmTypeField<
      ProfitCenters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    COST_CENTER_TYPE: OrderableEdmTypeField<
      ProfitCenters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE_FROM: OrderableEdmTypeField<
      ProfitCenters<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    EFFECTIVE_TO: OrderableEdmTypeField<
      ProfitCenters<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ACTIVE: EnumField<
      ProfitCenters<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    CENTER_OWNER: OrderableEdmTypeField<
      ProfitCenters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION: OneToOneLink<
      ProfitCenters<DeSerializersT>,
      DeSerializersT,
      DimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link costCenterType2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COST_CENTER_TYPE_2: OneToOneLink<
      ProfitCenters<DeSerializersT>,
      DeSerializersT,
      CostCenterTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_INFO: OneToOneLink<
      ProfitCenters<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_INFO: OneToManyLink<
      ProfitCenters<DeSerializersT>,
      DeSerializersT,
      EmployeesInfoApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProfitCenters<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link centerCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTER_CODE: fieldBuilder.buildEdmTypeField(
          'CenterCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link centerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTER_NAME: fieldBuilder.buildEdmTypeField(
          'CenterName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link groupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'GroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inWhichDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_WHICH_DIMENSION: fieldBuilder.buildEdmTypeField(
          'InWhichDimension',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link costCenterType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CENTER_TYPE: fieldBuilder.buildEdmTypeField(
          'CostCenterType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link effectiveFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_FROM: fieldBuilder.buildEdmTypeField(
          'EffectiveFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link effectiveTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_TO: fieldBuilder.buildEdmTypeField(
          'EffectiveTo',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', BoYesNoEnum, true),
        /**
         * Static representation of the {@link centerOwner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTER_OWNER: fieldBuilder.buildEdmTypeField(
          'CenterOwner',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProfitCenters)
      };
    }

    return this._schema;
  }
}
