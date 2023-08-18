/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Vertrieb_Planung } from './U_Vertrieb_Planung';
import { U_Vertrieb_PlanungRequestBuilder } from './U_Vertrieb_PlanungRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class U_Vertrieb_PlanungApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Vertrieb_Planung<DeSerializersT>, DeSerializersT>
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
  ): U_Vertrieb_PlanungApi<DeSerializersT> {
    return new U_Vertrieb_PlanungApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Vertrieb_Planung;

  requestBuilder(): U_Vertrieb_PlanungRequestBuilder<DeSerializersT> {
    return new U_Vertrieb_PlanungRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Vertrieb_Planung<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Vertrieb_Planung<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    U_Vertrieb_Planung<DeSerializersT>,
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
    typeof U_Vertrieb_Planung,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        U_Vertrieb_Planung,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Vertrieb_Planung<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Vertrieb_Planung<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_JAHR: OrderableEdmTypeField<
      U_Vertrieb_Planung<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_TERRITRY_ID: OrderableEdmTypeField<
      U_Vertrieb_Planung<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_VERTEILSCHLUESSEL: OrderableEdmTypeField<
      U_Vertrieb_Planung<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_PLANWERT: OrderableEdmTypeField<
      U_Vertrieb_Planung<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_PLAN_1_PROZENT: OrderableEdmTypeField<
      U_Vertrieb_Planung<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_PLAN_2_PROZENT: OrderableEdmTypeField<
      U_Vertrieb_Planung<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_PLAN_3_PROZENT: OrderableEdmTypeField<
      U_Vertrieb_Planung<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_OSLP: OrderableEdmTypeField<
      U_Vertrieb_Planung<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Vertrieb_Planung<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link uJahr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_JAHR: fieldBuilder.buildEdmTypeField('U_Jahr', 'Edm.Int32', false),
        /**
         * Static representation of the {@link uTerritryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TERRITRY_ID: fieldBuilder.buildEdmTypeField(
          'U_TerritryID',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link uVerteilschluessel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_VERTEILSCHLUESSEL: fieldBuilder.buildEdmTypeField(
          'U_Verteilschluessel',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link uPlanwert} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PLANWERT: fieldBuilder.buildEdmTypeField(
          'U_planwert',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link uPlan1Prozent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PLAN_1_PROZENT: fieldBuilder.buildEdmTypeField(
          'U_Plan1Prozent',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link uPlan2Prozent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PLAN_2_PROZENT: fieldBuilder.buildEdmTypeField(
          'U_Plan2Prozent',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link uPlan3Prozent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PLAN_3_PROZENT: fieldBuilder.buildEdmTypeField(
          'U_Plan3Prozent',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link uOslp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_OSLP: fieldBuilder.buildEdmTypeField('U_OSLP', 'Edm.Int32', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Vertrieb_Planung)
      };
    }

    return this._schema;
  }
}
