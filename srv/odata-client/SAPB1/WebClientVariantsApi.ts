/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WebClientVariants } from './WebClientVariants';
import { WebClientVariantsRequestBuilder } from './WebClientVariantsRequestBuilder';
import { WebClientVariantSelectedColumn } from './WebClientVariantSelectedColumn';
import { WebClientVariantGroupBy } from './WebClientVariantGroupBy';
import { WebClientVariantSortBy } from './WebClientVariantSortBy';
import { WebClientVariantEmbeddedChart } from './WebClientVariantEmbeddedChart';
import { WebClientVariantMChart } from './WebClientVariantMChart';
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
  CollectionField
} from '@sap-cloud-sdk/odata-v4';
export class WebClientVariantsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WebClientVariants<DeSerializersT>, DeSerializersT>
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
  ): WebClientVariantsApi<DeSerializersT> {
    return new WebClientVariantsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WebClientVariants;

  requestBuilder(): WebClientVariantsRequestBuilder<DeSerializersT> {
    return new WebClientVariantsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WebClientVariants<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WebClientVariants<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WebClientVariants<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof WebClientVariants,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WebClientVariants,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GUID: OrderableEdmTypeField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDER: OrderableEdmTypeField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    VIEW_TYPE: OrderableEdmTypeField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_VIEW_TYPE: OrderableEdmTypeField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VIEW_ID: OrderableEdmTypeField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OBJECT_NAME: OrderableEdmTypeField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILTER_BAR_LAYOUT: OrderableEdmTypeField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYSTEM_FILTER: OrderableEdmTypeField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_FILTER: OrderableEdmTypeField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_FILTER: OrderableEdmTypeField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PUBLIC: EnumField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    IS_SYSTEM: EnumField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERSION: OrderableEdmTypeField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    OVERVIEW_CUSTOMIZATION: OrderableEdmTypeField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHART_CUSTOMIZATION: OrderableEdmTypeField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEB_CLIENT_VARIANT_SELECTED_COLUMN_COLLECTION: CollectionField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      WebClientVariantSelectedColumn,
      true,
      true
    >;
    WEB_CLIENT_VARIANT_GROUP_BY_COLLECTION: CollectionField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      WebClientVariantGroupBy,
      true,
      true
    >;
    WEB_CLIENT_VARIANT_SORT_BY_COLLECTION: CollectionField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      WebClientVariantSortBy,
      true,
      true
    >;
    WEB_CLIENT_VARIANT_EMBEDDED_CHART_COLLECTION: CollectionField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      WebClientVariantEmbeddedChart,
      true,
      true
    >;
    WEB_CLIENT_VARIANT_M_CHART_COLLECTION: CollectionField<
      WebClientVariants<DeSerializers>,
      DeSerializersT,
      WebClientVariantMChart,
      true,
      true
    >;
    ALL_FIELDS: AllFields<WebClientVariants<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link guid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUID: fieldBuilder.buildEdmTypeField('Guid', 'Edm.String', false),
        /**
         * Static representation of the {@link order} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER: fieldBuilder.buildEdmTypeField('Order', 'Edm.Int32', true),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserId', 'Edm.Int32', true),
        /**
         * Static representation of the {@link viewType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIEW_TYPE: fieldBuilder.buildEdmTypeField(
          'ViewType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subViewType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_VIEW_TYPE: fieldBuilder.buildEdmTypeField(
          'SubViewType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link viewId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIEW_ID: fieldBuilder.buildEdmTypeField('ViewId', 'Edm.String', true),
        /**
         * Static representation of the {@link objectName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_NAME: fieldBuilder.buildEdmTypeField(
          'ObjectName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link filterBarLayout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILTER_BAR_LAYOUT: fieldBuilder.buildEdmTypeField(
          'FilterBarLayout',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link systemFilter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_FILTER: fieldBuilder.buildEdmTypeField(
          'SystemFilter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userFilter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_FILTER: fieldBuilder.buildEdmTypeField(
          'UserFilter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conditionFilter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_FILTER: fieldBuilder.buildEdmTypeField(
          'ConditionFilter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPublic} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PUBLIC: fieldBuilder.buildEnumField('IsPublic', BoYesNoEnum, true),
        /**
         * Static representation of the {@link isSystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SYSTEM: fieldBuilder.buildEnumField('IsSystem', BoYesNoEnum, true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEdmTypeField('Version', 'Edm.Int32', true),
        /**
         * Static representation of the {@link overviewCustomization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERVIEW_CUSTOMIZATION: fieldBuilder.buildEdmTypeField(
          'OverviewCustomization',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chartCustomization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHART_CUSTOMIZATION: fieldBuilder.buildEdmTypeField(
          'ChartCustomization',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link webClientVariantSelectedColumnCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEB_CLIENT_VARIANT_SELECTED_COLUMN_COLLECTION:
          fieldBuilder.buildCollectionField(
            'WebClientVariantSelectedColumnCollection',
            WebClientVariantSelectedColumn,
            true
          ),
        /**
         * Static representation of the {@link webClientVariantGroupByCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEB_CLIENT_VARIANT_GROUP_BY_COLLECTION:
          fieldBuilder.buildCollectionField(
            'WebClientVariantGroupByCollection',
            WebClientVariantGroupBy,
            true
          ),
        /**
         * Static representation of the {@link webClientVariantSortByCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEB_CLIENT_VARIANT_SORT_BY_COLLECTION:
          fieldBuilder.buildCollectionField(
            'WebClientVariantSortByCollection',
            WebClientVariantSortBy,
            true
          ),
        /**
         * Static representation of the {@link webClientVariantEmbeddedChartCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEB_CLIENT_VARIANT_EMBEDDED_CHART_COLLECTION:
          fieldBuilder.buildCollectionField(
            'WebClientVariantEmbeddedChartCollection',
            WebClientVariantEmbeddedChart,
            true
          ),
        /**
         * Static representation of the {@link webClientVariantMChartCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEB_CLIENT_VARIANT_M_CHART_COLLECTION:
          fieldBuilder.buildCollectionField(
            'WebClientVariantMChartCollection',
            WebClientVariantMChart,
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WebClientVariants)
      };
    }

    return this._schema;
  }
}
