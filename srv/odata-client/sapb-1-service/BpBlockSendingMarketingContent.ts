/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * BpBlockSendingMarketingContent
 */
export interface BpBlockSendingMarketingContent {
  /**
   * Card Code.
   * @nullable
   */
  cardCode?: string;
  /**
   * Communication Media Id.
   * @nullable
   */
  communicationMediaId?: number;
  /**
   * Choose.
   * @nullable
   */
  choose?: BoYesNoEnum;
}

/**
 * @deprecated Since v1.6.0. Use [[BpBlockSendingMarketingContent.build]] instead.
 */
export function createBpBlockSendingMarketingContent(json: any): BpBlockSendingMarketingContent {
  return BpBlockSendingMarketingContent.build(json);
}

/**
 * BpBlockSendingMarketingContentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpBlockSendingMarketingContentField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BpBlockSendingMarketingContent> {
  /**
   * Representation of the [[BpBlockSendingMarketingContent.cardCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cardCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('CardCode', this, 'Edm.String');
  /**
   * Representation of the [[BpBlockSendingMarketingContent.communicationMediaId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  communicationMediaId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('CommunicationMediaId', this, 'Edm.Int32');
  /**
   * Representation of the [[BpBlockSendingMarketingContent.choose]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  choose: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Choose', this);

  /**
   * Creates an instance of BpBlockSendingMarketingContentField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BpBlockSendingMarketingContent);
  }
}

export namespace BpBlockSendingMarketingContent {
  /**
   * Metadata information on all properties of the `BpBlockSendingMarketingContent` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpBlockSendingMarketingContent>[] = [{
    originalName: 'CardCode',
    name: 'cardCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'CommunicationMediaId',
    name: 'communicationMediaId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Choose',
    name: 'choose',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BpBlockSendingMarketingContent {
    return deserializeComplexTypeV4(json, BpBlockSendingMarketingContent);
  }
}
