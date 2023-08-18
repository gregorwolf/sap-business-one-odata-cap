/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DnfCodeSetup } from './DnfCodeSetup';
import { DnfCodeSetupRequestBuilder } from './DnfCodeSetupRequestBuilder';
import { ItemsApi } from './ItemsApi';
import { NcmCodesSetupApi } from './NcmCodesSetupApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class DnfCodeSetupApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DnfCodeSetup<DeSerializersT>, DeSerializersT>
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
  ): DnfCodeSetupApi<DeSerializersT> {
    return new DnfCodeSetupApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      DnfCodeSetup<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ncmCodeSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NCM_CODE_SETUP: OneToOneLink<
      DnfCodeSetup<DeSerializersT>,
      DeSerializersT,
      NcmCodesSetupApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ItemsApi<DeSerializersT>, NcmCodesSetupApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ITEMS: new OneToManyLink('Items', this, linkedApis[0]),
      NCM_CODE_SETUP: new OneToOneLink('NCMCodeSetup', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = DnfCodeSetup;

  requestBuilder(): DnfCodeSetupRequestBuilder<DeSerializersT> {
    return new DnfCodeSetupRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DnfCodeSetup<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DnfCodeSetup<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DnfCodeSetup<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DnfCodeSetup, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(DnfCodeSetup, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      DnfCodeSetup<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NCM_CODE: OrderableEdmTypeField<
      DnfCodeSetup<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DNF_CODE: OrderableEdmTypeField<
      DnfCodeSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UO_M: OrderableEdmTypeField<
      DnfCodeSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FACTOR: OrderableEdmTypeField<
      DnfCodeSetup<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      DnfCodeSetup<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ncmCodeSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NCM_CODE_SETUP: OneToOneLink<
      DnfCodeSetup<DeSerializersT>,
      DeSerializersT,
      NcmCodesSetupApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DnfCodeSetup<DeSerializers>>;
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
         * Static representation of the {@link ncmCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NCM_CODE: fieldBuilder.buildEdmTypeField('NCMCode', 'Edm.Int32', true),
        /**
         * Static representation of the {@link dnfCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DNF_CODE: fieldBuilder.buildEdmTypeField('DNFCode', 'Edm.String', true),
        /**
         * Static representation of the {@link uoM} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UO_M: fieldBuilder.buildEdmTypeField('UoM', 'Edm.String', true),
        /**
         * Static representation of the {@link factor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTOR: fieldBuilder.buildEdmTypeField('Factor', 'Edm.Double', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DnfCodeSetup)
      };
    }

    return this._schema;
  }
}
