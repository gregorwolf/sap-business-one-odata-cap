/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NcmCodesSetup } from './NcmCodesSetup';
import { NcmCodesSetupRequestBuilder } from './NcmCodesSetupRequestBuilder';
import { ItemsApi } from './ItemsApi';
import { DnfCodeSetupApi } from './DnfCodeSetupApi';
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
export class NcmCodesSetupApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<NcmCodesSetup<DeSerializersT>, DeSerializersT>
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
  ): NcmCodesSetupApi<DeSerializersT> {
    return new NcmCodesSetupApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      NcmCodesSetup<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dnfCodeSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DNF_CODE_SETUP: OneToManyLink<
      NcmCodesSetup<DeSerializersT>,
      DeSerializersT,
      DnfCodeSetupApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ItemsApi<DeSerializersT>, DnfCodeSetupApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ITEMS: new OneToManyLink('Items', this, linkedApis[0]),
      DNF_CODE_SETUP: new OneToManyLink('DNFCodeSetup', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = NcmCodesSetup;

  requestBuilder(): NcmCodesSetupRequestBuilder<DeSerializersT> {
    return new NcmCodesSetupRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    NcmCodesSetup<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<NcmCodesSetup<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<NcmCodesSetup<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof NcmCodesSetup, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(NcmCodesSetup, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      NcmCodesSetup<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NCM_CODE: OrderableEdmTypeField<
      NcmCodesSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      NcmCodesSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROUP_CODE: OrderableEdmTypeField<
      NcmCodesSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      NcmCodesSetup<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dnfCodeSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DNF_CODE_SETUP: OneToManyLink<
      NcmCodesSetup<DeSerializersT>,
      DeSerializersT,
      DnfCodeSetupApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<NcmCodesSetup<DeSerializers>>;
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
        NCM_CODE: fieldBuilder.buildEdmTypeField('NCMCode', 'Edm.String', true),
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
         * Static representation of the {@link groupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'GroupCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', NcmCodesSetup)
      };
    }

    return this._schema;
  }
}
