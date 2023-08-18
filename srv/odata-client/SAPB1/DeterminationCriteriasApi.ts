/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DeterminationCriterias } from './DeterminationCriterias';
import { DeterminationCriteriasRequestBuilder } from './DeterminationCriteriasRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class DeterminationCriteriasApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DeterminationCriterias<DeSerializersT>, DeSerializersT>
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
  ): DeterminationCriteriasApi<DeSerializersT> {
    return new DeterminationCriteriasApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DeterminationCriterias;

  requestBuilder(): DeterminationCriteriasRequestBuilder<DeSerializersT> {
    return new DeterminationCriteriasRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DeterminationCriterias<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DeterminationCriterias<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DeterminationCriterias<DeSerializersT>,
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
    typeof DeterminationCriterias,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DeterminationCriterias,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DMC_ID: OrderableEdmTypeField<
      DeterminationCriterias<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DETERMINATION_CRITERIA_PROPERTY: OrderableEdmTypeField<
      DeterminationCriterias<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE: EnumField<
      DeterminationCriterias<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      DeterminationCriterias<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DeterminationCriterias<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dmcId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DMC_ID: fieldBuilder.buildEdmTypeField('DmcId', 'Edm.Int32', false),
        /**
         * Static representation of the {@link determinationCriteriaProperty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETERMINATION_CRITERIA_PROPERTY: fieldBuilder.buildEdmTypeField(
          'DeterminationCriteriaProperty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', BoYesNoEnum, true),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField('Priority', 'Edm.Int32', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DeterminationCriterias)
      };
    }

    return this._schema;
  }
}
