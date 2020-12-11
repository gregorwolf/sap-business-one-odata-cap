import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { Contacts } from './Contacts';
/**
 * Request builder class for operations supported on the [[Contacts]] entity.
 */
export declare class ContactsRequestBuilder extends RequestBuilder<Contacts> {
    /**
     * Returns a request builder for retrieving one `Contacts` entity based on its keys.
     * @param contactCode Key property. See [[Contacts.contactCode]].
     * @returns A request builder for creating requests to retrieve one `Contacts` entity based on its keys.
     */
    getByKey(contactCode: number): GetByKeyRequestBuilderV4<Contacts>;
    /**
     * Returns a request builder for querying all `Contacts` entities.
     * @returns A request builder for creating requests to retrieve all `Contacts` entities.
     */
    getAll(): GetAllRequestBuilderV4<Contacts>;
    /**
     * Returns a request builder for creating a `Contacts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Contacts`.
     */
    create(entity: Contacts): CreateRequestBuilderV4<Contacts>;
    /**
     * Returns a request builder for updating an entity of type `Contacts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Contacts`.
     */
    update(entity: Contacts): UpdateRequestBuilderV4<Contacts>;
    /**
     * Returns a request builder for deleting an entity of type `Contacts`.
     * @param contactCode Key property. See [[Contacts.contactCode]].
     * @returns A request builder for creating requests that delete an entity of type `Contacts`.
     */
    delete(contactCode: number): DeleteRequestBuilderV4<Contacts>;
    /**
     * Returns a request builder for deleting an entity of type `Contacts`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Contacts` by taking the entity as a parameter.
     */
    delete(entity: Contacts): DeleteRequestBuilderV4<Contacts>;
}
//# sourceMappingURL=ContactsRequestBuilder.d.ts.map