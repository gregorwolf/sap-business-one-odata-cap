/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DeductionTaxHierarchies } from './DeductionTaxHierarchies';
import { DeductionTaxHierarchiesRequestBuilder } from './DeductionTaxHierarchiesRequestBuilder';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { DeductionTaxHierarchiesLine } from './DeductionTaxHierarchiesLine';
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
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class DeductionTaxHierarchiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DeductionTaxHierarchies<DeSerializersT>, DeSerializersT>
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
  ): DeductionTaxHierarchiesApi<DeSerializersT> {
    return new DeductionTaxHierarchiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      DeductionTaxHierarchies<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BusinessPartnersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_PARTNER: new OneToOneLink('BusinessPartner', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = DeductionTaxHierarchies;

  requestBuilder(): DeductionTaxHierarchiesRequestBuilder<DeSerializersT> {
    return new DeductionTaxHierarchiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DeductionTaxHierarchies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DeductionTaxHierarchies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DeductionTaxHierarchies<DeSerializersT>,
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
    typeof DeductionTaxHierarchies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DeductionTaxHierarchies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      DeductionTaxHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BP_CODE: OrderableEdmTypeField<
      DeductionTaxHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIERARCHY_CODE: OrderableEdmTypeField<
      DeductionTaxHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIERARCHY_NAME: OrderableEdmTypeField<
      DeductionTaxHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      DeductionTaxHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALID_UNTIL: OrderableEdmTypeField<
      DeductionTaxHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DEDUCTION_PERCENT: OrderableEdmTypeField<
      DeductionTaxHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MAXIMUM_TOTAL: OrderableEdmTypeField<
      DeductionTaxHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    LAST_UPDATED: OrderableEdmTypeField<
      DeductionTaxHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DEDUCTION_TAX_HIERARCHIES_LINES: CollectionField<
      DeductionTaxHierarchies<DeSerializers>,
      DeSerializersT,
      DeductionTaxHierarchiesLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      DeductionTaxHierarchies<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DeductionTaxHierarchies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABS_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link bpCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_CODE: fieldBuilder.buildEdmTypeField('BPCode', 'Edm.String', true),
        /**
         * Static representation of the {@link hierarchyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_CODE: fieldBuilder.buildEdmTypeField(
          'HierarchyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'HierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link validUntil} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_UNTIL: fieldBuilder.buildEdmTypeField(
          'ValidUntil',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link deductionPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_PERCENT: fieldBuilder.buildEdmTypeField(
          'DeductionPercent',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link maximumTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_TOTAL: fieldBuilder.buildEdmTypeField(
          'MaximumTotal',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link lastUpdated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_UPDATED: fieldBuilder.buildEdmTypeField(
          'LastUpdated',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link deductionTaxHierarchiesLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_TAX_HIERARCHIES_LINES: fieldBuilder.buildCollectionField(
          'DeductionTaxHierarchies_Lines',
          DeductionTaxHierarchiesLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DeductionTaxHierarchies)
      };
    }

    return this._schema;
  }
}
